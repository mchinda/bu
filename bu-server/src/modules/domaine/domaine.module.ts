import { Module } from '@nestjs/common';
import { DomaineService } from './domaine.service';
import { DomaineController } from './domaine.controller';

@Module({
  providers: [DomaineService],
  controllers: [DomaineController]
})
export class DomaineModule {}
