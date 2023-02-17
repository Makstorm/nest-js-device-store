import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  DeviceFilter,
  IDeviceService,
  DeviceDto,
  DeviceEntity,
  IFileService,
  FileServiceTag,
  TypeServiceTag,
  ITypeService,
  BrandServiceTag,
  IBrandService,
} from '../../domain';

@Injectable()
export class DeviceService implements IDeviceService {
  @InjectRepository(DeviceEntity)
  private readonly deviceEntity: Repository<DeviceEntity>;

  @Inject(FileServiceTag)
  private readonly fileService: IFileService;

  @Inject(TypeServiceTag)
  private readonly typeService: ITypeService;

  @Inject(BrandServiceTag)
  private readonly brandService: IBrandService;

  public async create(
    dto: DeviceDto,
    file: Express.Multer.File,
  ): Promise<DeviceEntity> {
    const typeEntity = await this.typeService.findOne(dto.typeId);
    const brandEntity = await this.brandService.findOne(dto.brandId);
    const deviceEntity = new DeviceEntity();

    deviceEntity.name = dto.name;
    deviceEntity.price = dto.price;
    deviceEntity.brandId = brandEntity;
    deviceEntity.typeId = typeEntity;
    const fileName = await this.fileService.createFile(file);
    deviceEntity.img = fileName;

    return await this.deviceEntity.save(deviceEntity);
  }

  public async getAll(filter: DeviceFilter): Promise<DeviceEntity[]> {
    return await this.deviceEntity.find();
  }

  public async getOne(id: string): Promise<DeviceEntity> {
    const entity = await this.deviceEntity.findOne({ where: { id } });
    return entity;
  }
}
