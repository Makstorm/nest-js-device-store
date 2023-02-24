import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { BasketEntity } from './basket.entity';
import { DeviceEntity } from './device.entity';

@Entity('basketDevice')
export class BasketDeviceEntity extends AbstractEntity {
  @ManyToOne(() => BasketEntity, (basket) => basket.basketDevices)
  @JoinColumn({ name: 'basket_id' })
  public basket: BasketEntity;

  @Column({ name: 'basket_id' })
  public basketId: string;

  @ManyToOne(() => DeviceEntity, (device) => device.basketDevices)
  @JoinColumn({ name: 'device_id' })
  public device: DeviceEntity;

  @Column({ name: 'device_id' })
  public deviceId: string;
}
