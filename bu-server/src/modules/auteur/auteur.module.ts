import { Module } from '@nestjs/common';
import { AuteurService } from './auteur.service';
import { AuteurController } from './auteur.controller';

@Module({
  providers: [AuteurService],
  controllers: [AuteurController]
})
export class AuteurModule {}
