import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { UserService } from 'src/user/user.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { Role, Status, USER_TABLE } from 'src/user/user.constants';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CONFIG } from 'src/config/config.constants';
import { AuthLoginEmailDTO } from './dto/auth-login-email.dto';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { SessionService } from 'src/session/session.service';
import { Session } from 'src/session/entities/session.entity';
import { promises } from 'dns';
import { JwtRefreshPayloadType } from './auth.types';

Injectable();
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  @Inject()
  private readonly userService: UserService;
  @Inject()
  private readonly mailService: MailService;
  @Inject()
  private readonly jwtService: JwtService;
  @Inject()
  private readonly configService: ConfigService;
  @Inject()
  private readonly sessionService: SessionService;

  async register(authRegisterDTO: AuthRegisterDTO) {
    const createUserPayload: CreateUserDTO = {
      ...authRegisterDTO,
      statusId: Status.Inactive,
      roleId: Role.User,
    };
    const user = await this.userService.findOne({
      where: { email: authRegisterDTO.email },
    });

    if (!!user) {
      throw new BadRequestException('User is exist with this email');
    }

    const newUser = await this.userService.createUser(createUserPayload);

    const hash = await this.jwtService.signAsync(
      {
        userId: newUser.userId,
      },
      {
        secret: this.configService.get(CONFIG.JWT_SECRET_CONFIRM_EMAIL),
        expiresIn: this.configService.get(CONFIG.JWT_EXPIRATION_CONFIRM_EMAIL),
      },
    );

    const activeMailPayload = {
      fullName: newUser.firstName + ' ' + newUser.lastName,
      email: newUser.email,
      activeLink:
        this.configService.getOrThrow(CONFIG.FRONTEND_HOST) + '/active/' + hash,
    };

    await this.mailService.sendActiveEmail(activeMailPayload);
  }

  async confirmEmail(hash: string) {
    let userId: number;
    try {
      const jwtData = await this.jwtService.verifyAsync(hash, {
        secret: this.configService.getOrThrow(CONFIG.JWT_SECRET_CONFIRM_EMAIL),
      });
      userId = jwtData.userId;
    } catch (error) {
      this.logger.error(
        'Error when confirm email for new user with message error: ' +
        error.message,
      );
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          hash: `invalidHash`,
        },
      });
    }
    if (!userId) {
      this.logger.error('Not found userId in jwt comfirm email token');
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          hash: `invalidHash`,
        },
      });
    }
    const user = await this.userService.findOneById(userId);

    if (!user) {
      this.logger.error('User not Found');
      throw new BadRequestException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        messages: 'User not found',
      });
    }
    user.statusId = Status.Active;
    await this.userService.updateUser(user);
  }
  async loginByEmail(authLoginEmailDTO: AuthLoginEmailDTO) {
    let user: User;

    if (authLoginEmailDTO.username)
      user = await this.userService.findOne({
        where: {
          username: authLoginEmailDTO.username,
        },
      });

    if (authLoginEmailDTO.email)
      user = await this.userService.findOne({
        where: { email: authLoginEmailDTO.email },
      });

    if (!user) {
      this.logger.error(
        'Error user not found with payload',
        authLoginEmailDTO.toString(),
      );
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        errors: {
          message: 'User not Found',
        },
      });
    }

    const isValidPassword = bcrypt.compareSync(
      authLoginEmailDTO.password,
      user.password,
    );

    if (!isValidPassword) {
      this.logger.error(
        'Invalid password with payload: ',
        authLoginEmailDTO.toString(),
      );
      throw new BadRequestException({
        HttpStatus: HttpStatus.BAD_REQUEST,
        errors: {
          message: 'Invalid password ',
        },
      });
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    const session = await this.sessionService.create({
      user: user,
      hash,
    });

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      userId: user.userId,
      roleId: user.roleId,
      sessionId: session.sessionId,
      hash,
    });

    return {
      refreshToken,
      token,
      tokenExpires,
      user,
    };
  }
  async refreshToken(data: JwtRefreshPayloadType) {
    const session: Session = await this.sessionService.findById(data.sessionId);

    if (!session) {
      throw new UnauthorizedException();
    }

    if (session.hash != data.hash) throw new UnauthorizedException();

    const user: User = await this.userService.findOneById(
      session.user.userId as any,
    );

    if (!user) {
      throw new UnauthorizedException();
    }


    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    await this.sessionService.updateById(session.sessionId, {
      hash: hash,
    });

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      userId: user.userId,
      roleId: user.roleId,
      sessionId: session.sessionId,
      hash,
    });

    return {
      token,
      refreshToken,
      tokenExpires
    }

  }
  async getTokensData(data: {
    userId: User['userId'];
    roleId: User['roleId'];
    sessionId: Session['sessionId'];
    hash: Session['hash'];
  }) {
    const tokenExpires = this.configService.get(CONFIG.JWT_EXPIRATION_AUTH);
    const [token, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          userId: data.userId,
          roleId: data.roleId,
          sessionId: data.sessionId,
        },
        {
          secret: this.configService.get(CONFIG.JWT_SECRET_AUTH),
          expiresIn: this.configService.get(CONFIG.JWT_EXPIRATION_AUTH),
        },
      ),
      this.jwtService.signAsync(
        {
          sessionId: data.sessionId,
          hash: data.hash,
        },
        {
          secret: this.configService.get(CONFIG.JWT_SECRET_FRESH_TOKEN),
          expiresIn: this.configService.get(CONFIG.JWT_EXPIRATION_FRESH_TOKEN),
        },
      ),
    ]);
    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }
}
