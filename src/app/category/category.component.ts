import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ICategory } from '../../utils/interfaces';

@Component({
  selector: 'app-category',
  imports: [CarouselModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories!: ICategory[]
  constructor(ProductService:ProductService) {
    this.categories = ProductService.categories;
  }
  categoryResponsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    }
  ]
}
