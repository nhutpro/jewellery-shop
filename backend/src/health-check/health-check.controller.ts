import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { CONFIG } from 'src/config/config.constants';

@Controller('health-check')
export class HealthCheckController {
  @Inject()
  private configService: ConfigService;

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHealthCheck(): string {
    return this.configService.get(CONFIG.HEALTH_CHECK);
  }
}
