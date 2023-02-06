import { Controller, Post, Body, Inject, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly service: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    console.log(dto);
    return this.service.registration(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.service.login(dto);
  }
}
