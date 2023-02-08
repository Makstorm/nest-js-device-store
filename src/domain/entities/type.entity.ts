import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('types')
export class TypeEntity extends AbstractEntity {
  @Column()
  public name: string;
}
