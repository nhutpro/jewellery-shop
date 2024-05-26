import { UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { CONFIG, ConfigType } from "src/config/config.constants";
import { JwtRefreshPayloadType } from "../auth.types";
import { OrNeverType } from "src/utils/types";

class JWTStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(configService: ConfigService<ConfigType>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get(CONFIG.JWT_SECRET_AUTH, { infer: true }),
            ignoreExpiration: false
        })
    }

    public validate(
        payload: JwtRefreshPayloadType,
    ): OrNeverType<JwtRefreshPayloadType> {
        if (!payload.sessionId) {
            throw new UnauthorizedException();
        }

        return payload;
    }
}