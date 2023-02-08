import { ApiProperty } from '@nestjs/swagger';

export class DeviceInfoDto {
  @ApiProperty({ type: String })
  public key: string;

  @ApiProperty({ type: Object })
  public value: any;
}

export class DeviceDto {
  @ApiProperty({ type: String })
  public name: string;

  @ApiProperty({ type: Number })
  public price: number;

  @ApiProperty({ type: String })
  public brandId: string;

  @ApiProperty({ type: String })
  public typeId: string;

  @ApiProperty({ type: () => DeviceInfoDto })
  public info: DeviceInfoDto;
}
