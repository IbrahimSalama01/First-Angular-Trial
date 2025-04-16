import { ProductService } from './../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Component } from '@angular/core';
import { IProduct } from '../../utils/interfaces';
@Component({
  selector: 'app-products-page',
  imports: [ProductCardComponent,],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  products!: IProduct[]
  moreProducts :IProduct[];
  constructor(ProductService:ProductService) {
    this.products = ProductService.products;
    this.moreProducts = ProductService.moreProducts
  }
}
