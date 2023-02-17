import { DeviceFilter } from '../../models/device';
import { DeviceDto } from 'src/domain/models/device/device.dto';
import { DeviceEntity } from '../../entities';

export interface IDeviceService {
  create(dto: DeviceDto, file: Express.Multer.File): Promise<DeviceEntity>;
  getAll(filter: DeviceFilter): Promise<DeviceEntity[]>;
  getOne(id: string): Promise<DeviceEntity>;
}
