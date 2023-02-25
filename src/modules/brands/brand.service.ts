import { BrandDto, BrandEntity, IBrandService } from '@domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService implements IBrandService {
  @InjectRepository(BrandEntity)
  private readonly repository: Repository<BrandEntity>;

  public async findOne(id: string): Promise<BrandEntity> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  public async create(dto: BrandDto): Promise<BrandEntity> {
    const brandEntity = new BrandEntity();
    brandEntity.name = dto.name;
    return await this.repository.save(brandEntity);
  }

  public async getAll(): Promise<BrandEntity[]> {
    return await this.repository.find();
  }
}
