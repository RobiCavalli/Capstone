import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriComponent } from './laboratori.component';

describe('LaboratoriComponent', () => {
  let component: LaboratoriComponent;
  let fixture: ComponentFixture<LaboratoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
