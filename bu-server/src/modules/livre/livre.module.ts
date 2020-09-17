import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivreService } from './livre.service';
import { LivreController } from './livre.controller';
import { LivreEntity } from './livre.entity';

@Module({
  imports:[LivreModule,
    TypeOrmModule.forFeature([LivreEntity])],
  providers: [LivreService],
  controllers: [LivreController]
})
export class LivreModule {

}
