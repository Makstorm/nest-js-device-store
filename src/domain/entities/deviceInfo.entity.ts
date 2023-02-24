import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { DeviceEntity } from './device.entity';

@Entity('device_info')
export class DeviceInfoEntity extends AbstractEntity {
  @Column()
  public title: string;
  @Column()
  public description: string;
  @ManyToOne(() => DeviceEntity, (device) => device.info)
  @JoinColumn({ name: 'device_id' })
  public device: DeviceEntity;

  @Column({ name: 'device_id' })
  public deviceId: string;
}
