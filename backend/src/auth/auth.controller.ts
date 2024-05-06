import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthService } from './auth.service';
import { AuthConfirmEmailDTO } from './dto/auth-confirm-email.dto';
import { AuthLoginEmailDTO } from './dto/auth-login-email.dto';

@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post('register/email')
  @HttpCode(HttpStatus.NO_CONTENT)
  async register(@Body() authRegisterDTO: AuthRegisterDTO) {
    return this.authService.register(authRegisterDTO);
  }

  @Post('email/confirm')
  @HttpCode(HttpStatus.NO_CONTENT)
  async confirmEmail(@Body() authConfirmEmailDTO: AuthConfirmEmailDTO) {
    return this.authService.confirmEmail(authConfirmEmailDTO.hash);
  }

  @Post('login/email')
  async loginByEmail(@Body() authLoginEmailDTO: AuthLoginEmailDTO) {
    return this.authService.loginByEmail(authLoginEmailDTO);
  }
}
