import { ApiProperty } from '@nestjs/swagger';

export class TypeDto {
  @ApiProperty({ type: String, example: 'Smartphone' })
  public name: string;
}
