import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('devices')
export class DeviceEntity extends AbstractEntity {
  @Column()
  public name: string;
  @Column()
  public price: number;
  @Column({ default: 0 })
  public rating: number;
  @Column()
  public img: string;
}
