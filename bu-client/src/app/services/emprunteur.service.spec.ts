import { TestBed } from '@angular/core/testing';

import { EmprunteurService } from './emprunteur.service';

describe('EmprunteurService', () => {
  let service: EmprunteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprunteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
