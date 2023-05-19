import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BannerV1Component } from './components/banner-v1/banner-v1.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { BannerV2Component } from './components/banner-v2/banner-v2.component';
import { SmallBannerComponent } from './components/small-banner/small-banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SectionCarouselOneComponent } from './components/section-carousel-one/section-carousel-one.component';
import { SectionCarouselTwoComponent } from './components/section-carousel-two/section-carousel-two.component';
import { CardV2Component } from './components/card-v2/card-v2.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { CardV3Component } from './components/card-v3/card-v3.component';
import { BreadcrumbMenuComponent } from './components/breadcrumb-menu/breadcrumb-menu.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { FilterComponent } from './components/filter/filter.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material/angular-material.module';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    CardProductComponent,
    ProductsComponent,
    NavbarComponent,
    ProductDetailsComponent,
    HeaderComponent,
    DashboardComponent,
    BannerV1Component,
    CarouselComponent,
    CardComponent,
    BannerV2Component,
    SmallBannerComponent,
    FooterComponent,
    SearchbarComponent,
    SectionCarouselOneComponent,
    SectionCarouselTwoComponent,
    CardV2Component,
    SectionThreeComponent,
    CardV3Component,
    BreadcrumbMenuComponent,
    TableInfoComponent,
    FilterComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
