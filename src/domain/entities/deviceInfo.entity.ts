import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { DeviceEntity } from './device.entity';

@Entity('device_info')
export class DeviceInfoEntity extends AbstractEntity {
  @Column()
  public title: string;
  @Column()
  public description: string;
  @ManyToOne(() => DeviceEntity, (device) => device.info)
  public device: DeviceEntity;
}
