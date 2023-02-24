import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { DeviceEntity } from './device.entity';

@Entity('brands')
export class BrandEntity extends AbstractEntity {
  @Column()
  public name: string;

  @OneToMany(() => DeviceEntity, (device) => device.brand)
  public devices: DeviceEntity[];
}
