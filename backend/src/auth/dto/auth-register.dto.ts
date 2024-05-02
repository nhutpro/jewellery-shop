import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class AuthRegisterDTO { 
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;
}