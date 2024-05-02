import { IsJWT } from 'class-validator';

export class AuthConfirmEmailDTO {
  @IsJWT()
  hash: string;
}
