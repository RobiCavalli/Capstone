import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprofondimentiComponent } from './approfondimenti.component';

describe('ApprofondimentiComponent', () => {
  let component: ApprofondimentiComponent;
  let fixture: ComponentFixture<ApprofondimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprofondimentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprofondimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
