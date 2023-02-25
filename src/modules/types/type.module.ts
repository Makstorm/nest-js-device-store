import { TypeEntity, TypeServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  controllers: [TypeController],
  providers: [{ provide: TypeServiceTag, useClass: TypeService }],
  exports: [TypeServiceTag],
})
export class TypeModule {}
