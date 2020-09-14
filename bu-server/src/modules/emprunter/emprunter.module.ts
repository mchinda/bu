import { Module } from '@nestjs/common';
import { EmprunterService } from './emprunter.service';
import { EmprunterController } from './emprunter.controller';

@Module({
  providers: [EmprunterService],
  controllers: [EmprunterController]
})
export class EmprunterModule {}
