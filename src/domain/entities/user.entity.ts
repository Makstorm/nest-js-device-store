import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column()
  public email: string;
  @Column()
  public passwordHash: string;
}
