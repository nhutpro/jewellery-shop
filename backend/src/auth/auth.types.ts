import { Session } from "src/session/entities/session.entity";


export type JwtRefreshPayloadType = {
  sessionId: Session['sessionId'];
  hash: Session['hash'];
  iat: number;
  exp: number;
};
