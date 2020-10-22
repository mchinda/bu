import { Module } from '@nestjs/common';
import { VillageService } from './village.service';
import { VillageController } from './village.controller';
import { VillageEntity } from './village.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[VillageModule,
    TypeOrmModule.forFeature([VillageEntity])],
  providers: [VillageService],
  controllers: [VillageController]
})
export class VillageModule {}
