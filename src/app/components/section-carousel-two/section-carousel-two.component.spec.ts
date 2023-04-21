import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarouselTwoComponent } from './section-carousel-two.component';

describe('SectionCarouselTwoComponent', () => {
  let component: SectionCarouselTwoComponent;
  let fixture: ComponentFixture<SectionCarouselTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCarouselTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCarouselTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
