import { Test, TestingModule } from '@nestjs/testing';
import { EmprunterService } from './emprunter.service';

describe('EmprunterService', () => {
  let service: EmprunterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmprunterService],
    }).compile();

    service = module.get<EmprunterService>(EmprunterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
