import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { BasketEntity } from './basket.entity';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column()
  public email: string;

  @Column()
  public passwordHash: string;

  @OneToOne(() => BasketEntity)
  @JoinColumn()
  public basketId: string;
}
