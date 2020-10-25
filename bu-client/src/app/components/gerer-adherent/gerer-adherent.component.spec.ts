import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAdherentComponent } from './liste-adherent.component';

describe('GererAdherentComponent', () => {
  let component: GererAdherentComponent;
  let fixture: ComponentFixture<GererAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
