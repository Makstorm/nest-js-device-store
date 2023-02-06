import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from '../../domain/entities';
import { RegisterDto, LoginDto } from './dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  @InjectRepository(UserEntity)
  private readonly userRepository: Repository<UserEntity>;

  public async registration(dto: RegisterDto) {
    const doesExist = await this.userRepository.exist({
      where: {
        email: dto.email,
      },
    });

    if (doesExist) {
      throw new BadRequestException(`Email ${dto.email} is already taken`);
    }

    const userEntity = new UserEntity();
    userEntity.email = dto.email;
    userEntity.passwordHash = dto.password;

    await this.userRepository.save(userEntity);

    return userEntity;
  }

  public async login(dto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new NotFoundException(
        `Account with email ${dto.email} does not exist`,
      );
    }

    if (user.passwordHash !== dto.password) {
      throw new BadRequestException('Wrong credentials');
    }

    return user;
  }
}
