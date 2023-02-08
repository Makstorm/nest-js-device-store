import { LoginDto, UserAuth } from '../../models';

export interface IAuthService {
  login(dto: LoginDto): Promise<UserAuth>;
}
