import { Controller, Post, Body, Inject } from '@nestjs/common';
import {
  RegisterDto,
  LoginDto,
  UserAuth,
  AuthServiceTag,
  IAuthService,
} from '../../domain';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('AuthControler')
@Controller('auth')
export class AuthController {
  public constructor(
    @Inject(AuthServiceTag) private readonly service: IAuthService,
  ) {}

  @Post('register')
  public async register(@Body() dto: RegisterDto): Promise<void> {
    console.log(dto);
    return await this.service.registration(dto);
  }

  @ApiResponse({
    type: UserAuth,
  })
  @Post('login')
  public async login(@Body() dto: LoginDto): Promise<UserAuth> {
    return await this.service.login(dto);
  }
}
