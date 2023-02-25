import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Inject,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  DeviceFilter,
  DeviceModel,
  DeviceServiceTag,
  IDeviceService,
  DeviceDto,
} from '../../domain';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../../core';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Devices')
@UseGuards(JwtGuard)
@Controller('device')
export class DeviceController {
  public constructor(
    @Inject(DeviceServiceTag) private readonly service: IDeviceService,
  ) {}

  @ApiResponse({ type: DeviceModel })
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  public async create(
    @Body() dto: DeviceDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    file: Express.Multer.File,
  ): Promise<DeviceModel> {
    const entity = await this.service.create(dto, file);
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
