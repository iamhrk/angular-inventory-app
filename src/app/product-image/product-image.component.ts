import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-image',
  template: `
              <img class="product-image" [src]="product.imageUrl">
            `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {

  @Input() product: Product;
  @HostBinding("attr.class") cssClass = "ui small image";
}
