import { Module } from '@nestjs/common';
import { BibliothequeService } from './bibliotheque.service';
import { BibliothequeController } from './bibliotheque.controller';
import { BibliothequeEntity } from './bibliotheque.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[BibliothequeModule,
    TypeOrmModule.forFeature([BibliothequeEntity])],
  providers: [BibliothequeService],
  controllers: [BibliothequeController]
})
export class BibliothequeModule {
  
}
