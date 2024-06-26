import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  template: `<div class="price-display">\${{ price }}</div>`,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent {
  @Input() price: number;
}
