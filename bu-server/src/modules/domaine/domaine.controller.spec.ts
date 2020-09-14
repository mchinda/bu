import { Test, TestingModule } from '@nestjs/testing';
import { DomaineController } from './domaine.controller';

describe('DomaineController', () => {
  let controller: DomaineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomaineController],
    }).compile();

    controller = module.get<DomaineController>(DomaineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
