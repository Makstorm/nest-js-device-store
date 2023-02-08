import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceDto } from './dto/device.dto';
import { DeviceFilter, DeviceModel } from '../../domain';
import { ApiResponse } from '@nestjs/swagger';

@Controller('device')
export class DeviceController {
  public constructor(
    @Inject(DeviceService) private readonly service: DeviceService,
  ) {}

  @ApiResponse({ type: DeviceModel })
  @Post()
  public async create(@Body() dto: DeviceDto): Promise<DeviceModel> {
    const entity = await this.service.create(dto);
    return DeviceModel.fromEntity(entity);
  }

  @ApiResponse({ type: [DeviceModel] })
  @Get()
  public async getAll(@Query() filter: DeviceFilter): Promise<DeviceModel[]> {
    const entities = await this.service.getAll(filter);
    return entities.map((entity) => DeviceModel.fromEntity(entity));
  }

  @ApiResponse({ type: DeviceModel })
  @Get('/:id')
  public async getOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<DeviceModel> {
    const entity = await this.service.getOne(id);
    return DeviceModel.fromEntity(entity);
  }
}
