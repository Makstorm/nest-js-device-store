import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    type: String,
    description: 'Should be of email format',
    example: 'cool@email.com',
  })
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @ApiProperty({ type: String })
  @MinLength(8)
  @IsNotEmpty()
  public password: string;
}