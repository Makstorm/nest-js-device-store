import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { TypeEntity } from '../../entities';

export class TypeModel {
  @ApiProperty({ type: String, example: randomUUID() })
  public id: string;

  @ApiProperty({ type: String, example: 'Smartphone' })
  public name: string;

  public static fromEntity(type: TypeEntity): TypeModel {
    if (!type) {
      return null;
    }
    const model = new TypeModel();
    model.id = type.id;
    model.name = type.name;
    return model;
  }
}
