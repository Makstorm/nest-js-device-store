import { ApiProperty } from '@nestjs/swagger';
import { DeviceEntity } from '../../entities';
import { randomUUID } from 'crypto';

export class DeviceModel {
  @ApiProperty({ type: String, example: randomUUID() })
  public id: string;

  public static fromEntity(device: DeviceEntity): DeviceModel {
    if (!device) {
      return null;
    }
    const model = new DeviceModel();
    model.id = device.id;
    // assign other required fields

    return model;
  }
}
