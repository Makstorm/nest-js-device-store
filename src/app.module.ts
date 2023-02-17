import { Module } from '@nestjs/common';
import { AuthModule, DeviceModule, UserModule } from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as _entities from './domain/entities';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const entitiesArray = Object.values(_entities);
        return {
          type: 'postgres',
          host: config.getOrThrow('DB_HOST'),
          port: config.getOrThrow('DB_PORT'),
          username: config.getOrThrow('DB_USER'),
          password: config.getOrThrow('DB_PASSWORD'),
          database: config.getOrThrow('DB_NAME'),
          entities: entitiesArray,
          synchronize: true,
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    AuthModule,
    DeviceModule,
    UserModule,
  ],
})
export class AppModule {}
