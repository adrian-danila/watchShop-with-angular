import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'site-map', component: SitemapComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent },
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
