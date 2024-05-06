import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { CONFIG, ConfigType } from 'src/config/config.constants';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;
  @Inject()
  private readonly configService: ConfigService<ConfigType>;

  async createUser(createUserDTO: CreateUserDTO) {
    // TODO: fix infer problem not working
    if (createUserDTO.password) {
      createUserDTO.password = bcrypt.hashSync(
        createUserDTO.password,
        +this.configService.get<number>('BCRYPT_ROUND', {
          infer: true,
        }),
      );
    }
    return this.userRepository.save(createUserDTO);
  }
  async updateUser(payload) {
    this.userRepository.save(payload);
  }
  findOne(query) {
    return this.userRepository.findOne(query);
  }
}
