import { Component, input } from '@angular/core';
import { IProduct } from '../../utils/interfaces';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-product-card',
  imports: [Button, Tag],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product = input<IProduct>();
}
