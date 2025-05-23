
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', loadComponent: () => import('./products-page/products-page.component').then(c => c.ProductsPageComponent )},
];
