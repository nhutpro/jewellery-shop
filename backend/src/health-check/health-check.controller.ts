import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CONFIG } from 'src/config/config.constants';

@Controller('health-check')
export class HealthCheckController {
  @Inject()
  private configService: ConfigService;

  @Get()
  getHealthCheck(): string {
    return this.configService.get(CONFIG.HEALTH_CHECK);
  }
}
