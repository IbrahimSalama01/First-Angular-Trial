import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { IProduct } from '../../utils/interfaces';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product',
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products!: IProduct[];
  constructor(ProductService:ProductService) {
    this.products = ProductService.products
  }
  productsResponsiveOptions = [
    {
      breakpoint: '1499px',
      numVisible: 4,
      numScroll: 2
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 2
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]
}
