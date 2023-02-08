import { Controller, Post, Body, Inject, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, UserAuth } from '../../domain';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('AuthControler')
@Controller('auth')
export class AuthController {
  public constructor(
    @Inject(AuthService) private readonly service: AuthService,
  ) {}

  @Post('register')
  private async register(@Body() dto: RegisterDto): Promise<void> {
    console.log(dto);
    return this.service.registration(dto);
  }

  @ApiResponse({
    type: UserAuth,
  })
  @Post('login')
  private async login(@Body() dto: LoginDto): Promise<UserAuth> {
    return this.service.login(dto);
  }
}
