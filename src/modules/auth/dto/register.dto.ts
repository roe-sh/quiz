import { IsString, IsEmail, MinLength, IsEnum } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(['student', 'admin'])
  role: 'student' | 'admin';
}
