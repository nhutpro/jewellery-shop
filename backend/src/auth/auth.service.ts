import {
  HttpStatus,
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { Role, Status } from 'src/user/user.constants';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CONFIG } from 'src/config/config.constants';

Injectable();
export class AuthService {
  @Inject()
  private readonly userService: UserService;
  @Inject()
  private readonly mailService: MailService;
  @Inject()
  private readonly jwtService: JwtService;
  @Inject()
  private readonly configService: ConfigService;

  async register(authRegisterDTO: AuthRegisterDTO) {
    const createUserPayload: CreateUserDTO = {
      ...authRegisterDTO,
      statusId: Status.Inactive,
      roleId: Role.User,
    };
    const newUser = await this.userService.createUser(createUserPayload);

    const hash = await this.jwtService.signAsync(
      {
        userId: newUser.userID,
      },
      {
        secret: this.configService.get(CONFIG.JWT_SETCRET),
        expiresIn: this.configService.get(CONFIG.JWT_EXPIRATION_TIME),
      },
    );

    await this.mailService.userRegister();
  }

  async confirmEmail(hash: string) {
    let userId;
    try {
      const jwtData = await this.jwtService.verifyAsync(hash, {
        secret: this.configService.getOrThrow(CONFIG.JWT_SETCRET),
      });
      userId = jwtData.confirmEmailUserId;
    } catch {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          hash: `invalidHash`,
        },
      });
    }
    const user = await this.userService.findOne({userId});
   user.statusId = Status.Active
   await this.userService.updateUser(user.userID, user);

  }
}
