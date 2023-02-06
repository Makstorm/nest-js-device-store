import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @MinLength(8)
  @IsNotEmpty()
  public password: string;
}
