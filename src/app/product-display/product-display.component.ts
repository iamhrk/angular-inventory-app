import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-display',
  template: `<div class="price-display">\${{ price }}</div>`,
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  @Input() price: number;
}
