import { ITypeService, TypeDto, TypeEntity } from '@domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService implements ITypeService {
  @InjectRepository(TypeEntity)
  private readonly repository: Repository<TypeEntity>;

  public async findOne(id: string): Promise<TypeEntity> {
    return this.repository.findOne({ where: { id } });
  }

  public async create(dto: TypeDto): Promise<TypeEntity> {
    const typeEntity = new TypeEntity();
    typeEntity.name = dto.name;
    return await this.repository.save(typeEntity);
  }

  public async getAll(): Promise<TypeEntity[]> {
    return await this.repository.find();
  }
}
