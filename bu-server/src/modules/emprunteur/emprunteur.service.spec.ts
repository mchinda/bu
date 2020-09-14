import { Test, TestingModule } from '@nestjs/testing';
import { EmprunteurService } from './emprunteur.service';

describe('EmprunteurService', () => {
  let service: EmprunteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmprunteurService],
    }).compile();

    service = module.get<EmprunteurService>(EmprunteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
