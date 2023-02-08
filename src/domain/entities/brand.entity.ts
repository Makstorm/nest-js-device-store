import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('brands')
export class BrandEntity extends AbstractEntity {
  @Column()
  public name: string;
}
