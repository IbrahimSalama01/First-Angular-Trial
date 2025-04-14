import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent,ProductComponent,CategoryComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'helloAngular';
  constructor(private primeng: PrimeNG) {}
  ngOnInit() {
    this.primeng.ripple.set(true);
}
}
