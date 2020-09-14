import { Module } from '@nestjs/common';
import { EmprunteurService } from './emprunteur.service';
import { EmprunteurController } from './emprunteur.controller';

@Module({
  providers: [EmprunteurService],
  controllers: [EmprunteurController]
})
export class EmprunteurModule {}
