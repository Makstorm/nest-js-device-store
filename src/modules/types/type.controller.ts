import { ITypeService, TypeDto, TypeModel, TypeServiceTag } from '@domain';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Types')
@Controller('type')
export class TypeController {
  @Inject(TypeServiceTag) private readonly service: ITypeService;

  @ApiResponse({ type: TypeModel })
  @Post()
  public async create(@Body() dto: TypeDto): Promise<TypeModel> {
    const entity = await this.service.create(dto);
    return TypeModel.fromEntity(entity);
  }

  @ApiResponse({ type: Array<TypeModel> })
  @Get()
  public async getAll(): Promise<TypeModel[]> {
    const entities = await this.service.getAll();
    return entities.map((e) => TypeModel.fromEntity(e));
  }
}
