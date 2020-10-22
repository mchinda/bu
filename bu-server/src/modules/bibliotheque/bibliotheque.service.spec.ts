import { Test, TestingModule } from '@nestjs/testing';
import { BibliothequeService } from './bibliotheque.service';

describe('BibliothequeService', () => {
  let service: BibliothequeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibliothequeService],
    }).compile();

    service = module.get<BibliothequeService>(BibliothequeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
