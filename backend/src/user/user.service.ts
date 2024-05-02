import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async createUser(createUserDTO: CreateUserDTO) {
    return this.userRepository.save(createUserDTO);
  }
  async updateUser(userId, playload) {
    this.userRepository.save(userId, playload);
  }
  findOne(fields) {
    return this.userRepository.findOne(fields);
  }
}
