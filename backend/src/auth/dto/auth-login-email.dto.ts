import { IsEmail, IsNotEmpty } from "class-validator"

export class AuthLoginEmailDTO {
    username?: string
    
    @IsEmail()
    email?: string

    @IsNotEmpty()
    password: string
}