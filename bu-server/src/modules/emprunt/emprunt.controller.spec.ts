import { Test, TestingModule } from '@nestjs/testing';
import { EmpruntController } from './Emprunt.controller';

describe('EmpruntController', () => {
  let controller: EmpruntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpruntController],
    }).compile();

    controller = module.get<EmpruntController>(EmpruntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
