import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingRoboticaComponent } from './coding-robotica.component';

describe('CodingRoboticaComponent', () => {
  let component: CodingRoboticaComponent;
  let fixture: ComponentFixture<CodingRoboticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingRoboticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingRoboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
