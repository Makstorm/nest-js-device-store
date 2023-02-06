import { Injectable } from '@nestjs/common';
import { DeviceDto } from './dto/device.dto';

@Injectable()
export class DeviceService {
  async create(dto: DeviceDto) {
    return 'device created';
  }

  async getAll(brandId: number, typeId: number) {
    return 'got all devices';
  }

  async getOne(id: number) {
    return 'got one device';
  }
}
