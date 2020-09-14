import { Module } from '@nestjs/common';
import { LivreService } from './livre.service';
import { LivreController } from './livre.controller';

@Module({
  providers: [LivreService],
  controllers: [LivreController]
})
export class LivreModule {}
