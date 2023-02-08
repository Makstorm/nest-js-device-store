import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('device_info')
export class DeviceInfoEntity extends AbstractEntity {
  @Column()
  public title: string;
  @Column()
  public description: string;
}
