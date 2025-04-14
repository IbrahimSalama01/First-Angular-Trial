import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { IProduct } from '../../utils/interfaces';
import { products } from '../../utils/db'
@Component({
  selector: 'app-product',
  imports: [CarouselModule, Button, Tag],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: IProduct[] = products
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
