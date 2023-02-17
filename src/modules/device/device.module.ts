import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceServiceTag, DeviceEntity } from '../../domain';
import { BrandModule } from '../brands';
import { FileModule } from '../files';
import { TypeModule } from '../types';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeviceEntity]),
    FileModule,
    TypeModule,
    BrandModule,
  ],
  controllers: [DeviceController],
  providers: [
    {
      provide: DeviceServiceTag,
      useClass: DeviceService,
    },
  ],
})
export class DeviceModule {}
