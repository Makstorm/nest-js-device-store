import { ApiProperty } from '@nestjs/swagger';

export class BrandDto {
  @ApiProperty({ type: String, example: 'Apple' })
  public name: string;
}
