import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { CardProductComponent } from 'src/app/components/card-product/card-product.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { SmallBannerComponent } from 'src/app/components/small-banner/small-banner.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProductDetailsComponent } from 'src/app/pages/product-details/product-details.component';
import { BannerV1Component } from 'src/app/components/banner-v1/banner-v1.component';
import { SectionCarouselOneComponent } from 'src/app/components/section-carousel-one/section-carousel-one.component';
import { SectionCarouselTwoComponent } from 'src/app/components/section-carousel-two/section-carousel-two.component';
import { BannerV2Component } from 'src/app/components/banner-v2/banner-v2.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { CardV2Component } from 'src/app/components/card-v2/card-v2.component';
import { SectionThreeComponent } from 'src/app/components/section-three/section-three.component';
import { BreadcrumbMenuComponent } from 'src/app/components/breadcrumb-menu/breadcrumb-menu.component';
import { TableInfoComponent } from 'src/app/components/table-info/table-info.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardV3Component } from 'src/app/components/card-v3/card-v3.component';
import { ProductDetailsBoxInfoComponent } from 'src/app/components/product-details-box-info/product-details-box-info.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';

const shopRoutes: Routes = [{ path: 'products', component: ProductsComponent }];

@NgModule({
  declarations: [
    ProductsComponent,
    NavbarComponent,
    CardProductComponent,
    HeaderComponent,
    SearchbarComponent,
    FilterComponent,
    SmallBannerComponent,
    FooterComponent,
    DashboardComponent,
    ProductDetailsComponent,
    BannerV1Component,
    SectionCarouselOneComponent,
    SectionCarouselTwoComponent,
    BannerV2Component,
    CarouselComponent,
    CardV2Component,
    SectionThreeComponent,
    BreadcrumbMenuComponent,
    TableInfoComponent,
    CardComponent,
    CardV3Component,
    ProductDetailsBoxInfoComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(shopRoutes),
  ],
  exports: [RouterModule],
})
export class ShopModule {}
