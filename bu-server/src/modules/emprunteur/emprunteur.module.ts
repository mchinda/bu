import { Module } from '@nestjs/common';
import { EmprunteurService } from './emprunteur.service';
import { EmprunteurController } from './emprunteur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmprunteurEntity } from './emprunteur.entity';


@Module({
  imports:[EmprunteurModule,
    TypeOrmModule.forFeature([EmprunteurEntity])],
  providers: [EmprunteurService],
  controllers: [EmprunteurController]
})
export class EmprunteurModule {}
