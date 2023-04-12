import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardV3Component } from './card-v3.component';

describe('CardV3Component', () => {
  let component: CardV3Component;
  let fixture: ComponentFixture<CardV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
