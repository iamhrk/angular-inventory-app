import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product : Product;
  constructor() {
    this.product = new Product(
    "NICEHAT",
    "A Nice Black Hat",
    "/assets/images/products/black-hat.jpg",
    ["Men", "Accessories", "Hats"], 
    29.99)
  }
}
