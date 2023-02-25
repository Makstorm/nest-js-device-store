import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy, JwtGuard } from '../../core';
import { UserModule } from '../user';
import { AuthServiceTag } from '@domain';
import { NotificationModule } from '../notifications';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.getOrThrow('JWT_SECRET'),
          signOptions: { expiresIn: '30d' },
        };
      },
    }),
    UserModule,
    NotificationModule,
  ],
  controllers: [AuthController],
  providers: [
    { provide: AuthServiceTag, useClass: AuthService },
    JwtStrategy,
    JwtGuard,
  ],
})
export class AuthModule {}
