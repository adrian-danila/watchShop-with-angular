import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'site-map', component: SitemapComponent},
  // {path: 'products', component: ProductsComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
