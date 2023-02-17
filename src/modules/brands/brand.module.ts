import { BrandEntity, BrandServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEntity])],
  controllers: [BrandController],
  providers: [
    {
      provide: BrandServiceTag,
      useClass: BrandService,
    },
  ],
  exports: [BrandServiceTag],
})
export class BrandModule {}
