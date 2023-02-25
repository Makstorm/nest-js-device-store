import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { BrandEntity } from '../../entities';

export class BrandModel {
  @ApiProperty({ type: String, example: randomUUID() })
  public id: string;

  @ApiProperty({ type: String, example: 'Apple' })
  public name: string;

  public static fromEntity(brand: BrandEntity): BrandModel {
    if (!brand) {
      return null;
    }
    const model = new BrandModel();
    model.id = brand.id;
    model.name = brand.name;
    return model;
  }
}
