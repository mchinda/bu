import { Module } from '@nestjs/common';
import { AuteurService } from './auteur.service';
import { AuteurController } from './auteur.controller';
import { AuteurEntity } from './auteur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[AuteurModule,
    TypeOrmModule.forFeature([AuteurEntity])],
  providers: [AuteurService],
  controllers: [AuteurController]
})
export class AuteurModule {}
