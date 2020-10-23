import { Module } from '@nestjs/common';
import { DomaineService } from './domaine.service';
import { DomaineController } from './domaine.controller';
import { DomaineEntity } from './domaine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[DomaineModule,
    TypeOrmModule.forFeature([DomaineEntity])],
  providers: [DomaineService],
  controllers: [DomaineController]
})
export class DomaineModule {

  }
