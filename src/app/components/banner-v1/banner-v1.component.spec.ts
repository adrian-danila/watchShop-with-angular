import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerV1Component } from './banner-v1.component';

describe('BannerV1Component', () => {
  let component: BannerV1Component;
  let fixture: ComponentFixture<BannerV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
