import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import {
  RegisterDto,
  LoginDto,
  UserEntity,
  UserAuth,
  IAuthService,
  UserServiceTag,
  IUserService,
} from '../../domain';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService implements IAuthService {
  @Inject(UserServiceTag)
  private readonly userService: IUserService;

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  public async registration(dto: RegisterDto): Promise<void> {
    const doesExist = await this.userService.isEmailTaken(dto.email);

    if (doesExist) {
      throw new BadRequestException(`Email ${dto.email} is already taken`);
    }

    const userEntity = new UserEntity();

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(dto.password, salt);

    userEntity.email = dto.email;
    userEntity.passwordHash = hashPassword;

    await this.userService.create(userEntity);
  }

  public async login(dto: LoginDto): Promise<UserAuth> {
    const user = await this.userService.findByEmail(dto.email);

    if (!user) {
      throw new NotFoundException(
        `Account with email ${dto.email} does not exist`,
      );
    }

    const comparePassword = bcrypt.compareSync(dto.password, user.passwordHash);
    if (!comparePassword) {
      throw new BadRequestException('Wrong credentials');
    }

    const payload = { userId: user.id, userEmail: user.email };
    return new UserAuth(this.jwtService.sign(payload));
  }
}
