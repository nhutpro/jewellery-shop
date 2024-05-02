import { IsEnum } from 'class-validator';
import { AuthRegisterDTO } from 'src/auth/dto/auth-register.dto';
import { Role, Status } from '../user.constants';

export class CreateUserDTO extends AuthRegisterDTO {
  @IsEnum(Status)
  statusId: number;
  @IsEnum(Role)
  roleId: number;
}
