import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { BasketDeviceEntity } from './basketDevice.entity';
import { BrandEntity } from './brand.entity';
import { DeviceInfoEntity } from './deviceInfo.entity';
import { TypeEntity } from './type.entity';

@Entity('devices')
export class DeviceEntity extends AbstractEntity {
  @Column()
  public name: string;

  @Column()
  public price: number;

  @ManyToOne(() => TypeEntity, (type) => type.devices)
  @JoinColumn({ name: 'type_id' })
  public type: TypeEntity;

  @Column({ name: 'type_id' })
  public typeId: string;

  @ManyToOne(() => BrandEntity, (brand) => brand.devices)
  @JoinColumn({ name: 'brand_id' })
  public brand: BrandEntity;

  @Column({ name: 'brand_id' })
  public brandId: string;

  @Column({ default: 0 })
  public rating: number;

  @OneToMany(() => BasketDeviceEntity, (basketDevice) => basketDevice.device)
  public basketDevices: BasketDeviceEntity[];

  @OneToMany(() => DeviceInfoEntity, (deviceInfo) => deviceInfo.device)
  public info: DeviceInfoEntity[];

  @Column()
  public img: string;
}
