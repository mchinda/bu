import { Test, TestingModule } from '@nestjs/testing';
import { EmprunteurController } from './emprunteur.controller';

describe('EmprunteurController', () => {
  let controller: EmprunteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmprunteurController],
    }).compile();

    controller = module.get<EmprunteurController>(EmprunteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
