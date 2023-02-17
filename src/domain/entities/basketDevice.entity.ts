import { Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { BasketEntity } from './basket.entity';
import { DeviceEntity } from './device.entity';

@Entity('basketDevice')
export class BasketDeviceEntity extends AbstractEntity {
  @ManyToOne(() => BasketEntity, (basket) => basket.basketDevices)
  public basket: BasketEntity;
  @ManyToOne(() => DeviceEntity, (device) => device.basketDevices)
  public device: DeviceEntity;
}
