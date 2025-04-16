import { ProductService } from './../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Component } from '@angular/core';
import { IProduct } from '../../utils/interfaces';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  imports: [ProductCardComponent,SelectModule,FormsModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  products!: IProduct[];
  categories: string[];
  selectedCategory: string ;
  selectedCategoryProducts: IProduct[];

  constructor(private ProductService:ProductService) {
    this.products = ProductService.products;
    this.categories =  [... new Set(this.products.map(product => product.category))];
    this.selectedCategory = this.categories[0];
    this.selectedCategoryProducts = this.products.filter(product => product.category === this.selectedCategory);
  }
  categoryChanged() {
    console.log(this.selectedCategory);
    this.selectedCategoryProducts = this.products.filter(product => product.category === this.selectedCategory);
  }
}
