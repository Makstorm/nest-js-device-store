import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceEntity } from 'src/domain/entities';
import { Repository } from 'typeorm';
import { DeviceDto } from './dto/device.dto';
import { DeviceFilter } from '../../domain';

@Injectable()
export class DeviceService {
  @InjectRepository(DeviceEntity)
  private readonly deviceEntity: Repository<DeviceEntity>;

  public async create(dto: DeviceDto): Promise<DeviceEntity> {
    return new DeviceEntity();
  }

  public async getAll(filter: DeviceFilter): Promise<DeviceEntity[]> {
    return [new DeviceEntity()];
  }

  public async getOne(id: string): Promise<DeviceEntity> {
    const entity = new DeviceEntity();

    entity.id = id;
    return entity;
  }
}
