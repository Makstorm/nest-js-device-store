import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceDto } from './dto/device.dto';

@Controller('device')
export class DeviceController {
  constructor(@Inject(DeviceService) private readonly service: DeviceService) {}

  @Post('/')
  async create(@Body() dto: DeviceDto) {
    return this.service.create(dto);
  }

  @Get('/')
  async getAll(
    @Query('brandId') brandId: number,
    @Query('typeId') typeId: number,
  ) {
    return this.service.getAll(brandId, typeId);
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }
}
