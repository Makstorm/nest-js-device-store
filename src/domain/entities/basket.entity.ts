import { Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { BasketDeviceEntity } from './basketDevice.entity';

@Entity('basket')
export class BasketEntity extends AbstractEntity {
  @OneToMany(() => BasketDeviceEntity, (basketDevice) => basketDevice.basket)
  public basketDevices: BasketDeviceEntity[];
}
