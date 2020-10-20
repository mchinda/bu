import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdherentComponent } from './liste-adherent.component';

describe('ListeAdherentComponent', () => {
  let component: ListeAdherentComponent;
  let fixture: ComponentFixture<ListeAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
