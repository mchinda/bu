import { Test, TestingModule } from '@nestjs/testing';
import { EmprunterController } from './emprunter.controller';

describe('EmprunterController', () => {
  let controller: EmprunterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmprunterController],
    }).compile();

    controller = module.get<EmprunterController>(EmprunterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
