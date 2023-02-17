import { UserEntity } from '../../entities';

export interface IUserService {
  findByEmail(email: string): Promise<UserEntity>;
  isEmailTaken(email: string): Promise<boolean>;
  create(entity: Partial<UserEntity>): Promise<UserEntity>;
}
