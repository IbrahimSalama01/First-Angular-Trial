import { ProductCardComponent } from '../product-card/product-card.component';
import { products } from './../../utils/db';
import { Component } from '@angular/core';
@Component({
  selector: 'app-products-page',
  imports: [ProductCardComponent,],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  products = products
}
