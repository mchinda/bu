import { Test, TestingModule } from '@nestjs/testing';
import { BibliothequeController } from './bibliotheque.controller';

describe('BibliothequeController', () => {
  let controller: BibliothequeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibliothequeController],
    }).compile();

    controller = module.get<BibliothequeController>(BibliothequeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
