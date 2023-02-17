import { BrandDto, BrandModel, BrandServiceTag, IBrandService } from '@domain';
import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../../core';

@ApiTags('Brands')
@UseGuards(JwtGuard)
@Controller('brand')
export class BrandController {
  @Inject(BrandServiceTag) private readonly service: IBrandService;

  @ApiResponse({ type: BrandModel })
  @Post()
  public async create(@Body() dto: BrandDto): Promise<BrandModel> {
    const entity = await this.service.create(dto);
    return BrandModel.fromEntity(entity);
  }

  @ApiResponse({ type: Array<BrandModel> })
  @Get()
  public async getAll(): Promise<BrandModel[]> {
    const entities = await this.service.getAll();
    return entities.map((e) => BrandModel.fromEntity(e));
  }
}
