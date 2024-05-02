import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import {AuthController} from './auth.controller'
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [UserModule, MailModule,JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
