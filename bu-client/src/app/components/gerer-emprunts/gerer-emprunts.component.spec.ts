import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererEmpruntsComponent } from './gerer-emprunts.component';

describe('GererEmpruntsComponent', () => {
  let component: GererEmpruntsComponent;
  let fixture: ComponentFixture<GererEmpruntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererEmpruntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererEmpruntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
