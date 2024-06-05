import { Module } from "@nestjs/common";
import { HealthCheckController } from "./health-check.controller";
import { PassportModule } from "@nestjs/passport";
import { JWTStrategy } from "src/auth/strategies/jwt.stategy";

@Module({
    imports: [PassportModule],
    providers:[JWTStrategy],
    controllers: [HealthCheckController]
})

export class HealthCheckModule { }