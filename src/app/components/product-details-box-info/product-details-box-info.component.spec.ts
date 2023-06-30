import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBoxInfoComponent } from './product-details-box-info.component';

describe('ProductDetailsBoxInfoComponent', () => {
  let component: ProductDetailsBoxInfoComponent;
  let fixture: ComponentFixture<ProductDetailsBoxInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsBoxInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsBoxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
