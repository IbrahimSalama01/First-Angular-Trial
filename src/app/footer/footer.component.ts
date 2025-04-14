import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  imageurl = "https://angular.io/assets/images/logos/angular/angular.svg";
  currentYear = new Date().getFullYear();
}
