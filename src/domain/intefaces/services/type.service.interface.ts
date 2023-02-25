import { TypeEntity } from 'src/domain/entities';

export interface ITypeService {
  findOne(id: string): Promise<TypeEntity>;
  create(dto): Promise<TypeEntity>;
  getAll(): Promise<TypeEntity[]>;
}
