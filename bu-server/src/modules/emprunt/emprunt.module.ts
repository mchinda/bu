import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpruntService } from './Emprunt.service';
import { EmpruntController } from './Emprunt.controller';
import { EmpruntEntity } from './emprunt.entity';

@Module({
  imports:[EmpruntModule,
    TypeOrmModule.forFeature([EmpruntEntity])],
  providers: [EmpruntService],
  controllers: [EmpruntController]
})
export class EmpruntModule {

}
