import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserService, UserEntity } from '@domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService implements IUserService {
  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;

  public async findByEmail(email: string): Promise<UserEntity> {
    return this.repository.findOne({
      where: { email },
    });
  }

  public async isEmailTaken(email: string): Promise<boolean> {
    return this.repository.exist({
      where: { email },
    });
  }

  public async create(entity: Partial<UserEntity>): Promise<UserEntity> {
    return this.repository.save(entity);
  }
}
