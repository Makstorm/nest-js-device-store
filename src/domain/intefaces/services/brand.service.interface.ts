import { BrandEntity } from '../../entities';
import { BrandDto } from '../../models';

export interface IBrandService {
  findOne(id: string): Promise<BrandEntity>;
  create(dto: BrandDto): Promise<BrandEntity>;
  getAll(): Promise<BrandEntity[]>;
}
