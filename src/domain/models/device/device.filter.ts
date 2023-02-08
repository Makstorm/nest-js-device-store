import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';

export class DeviceFilter {
  @IsUUID()
  @ApiProperty({ type: String, example: randomUUID() })
  public brandId: string;

  @IsUUID()
  @ApiProperty({ type: String, example: randomUUID() })
  public typeId: string;
}
