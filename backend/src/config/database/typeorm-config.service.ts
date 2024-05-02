import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { CONFIG } from '../config.constants';
import { join } from 'path';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject()
  private configService: ConfigService;

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get(CONFIG.DATABASE_TYPE),
      host: this.configService.get(CONFIG.DATABASE_HOST),
      port: this.configService.get(CONFIG.DATABASE_PORT),
      username: this.configService.get(CONFIG.DATABASE_USERNAME),
      password: this.configService.get(CONFIG.DATABASE_PASSWORD),
      database: this.configService.get(CONFIG.DATABASE_DATABASE),
      entities: [join(__dirname, '../../**', '*.entity.{ts,js}')],
      synchronize: true,
    } as TypeOrmModuleOptions;
  }
}
