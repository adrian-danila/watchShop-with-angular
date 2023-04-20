import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarouselOneComponent } from './section-carousel-one.component';

describe('SectionCarouselOneComponent', () => {
  let component: SectionCarouselOneComponent;
  let fixture: ComponentFixture<SectionCarouselOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCarouselOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCarouselOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
