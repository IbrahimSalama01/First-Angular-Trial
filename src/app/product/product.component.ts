import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import{Button} from 'primeng/button';
import{Tag} from 'primeng/tag';
import{IProduct} from '../../utils/interfaces';
import {products} from '../../utils/db'
@Component({
  selector: 'app-product',
  imports: [CarouselModule, Button, Tag],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: IProduct[]= products
}
