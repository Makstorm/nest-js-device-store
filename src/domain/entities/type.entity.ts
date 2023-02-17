import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { DeviceEntity } from './device.entity';

@Entity('types')
export class TypeEntity extends AbstractEntity {
  @Column()
  public name: string;
  @OneToMany(() => DeviceEntity, (device) => device.typeId)
  public devices: DeviceEntity[];
}
