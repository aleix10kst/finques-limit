import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email!: string;

  @MinLength(10)
  password!: string;

  @IsString()
  name!: string;
}
