import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererLivreComponent } from './gerer-livre.component';

describe('GererLivreComponent', () => {
  let component: GererLivreComponent;
  let fixture: ComponentFixture<GererLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
