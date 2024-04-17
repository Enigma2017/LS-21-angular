import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { fadeInOut } from '../../../../shared/animation';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  animations: [fadeInOut],
})
export class ProductDetailsComponent {
  selectedSize: string = '';
  message: string = '';
  constructor(private location: Location) {}

  selectSize(size: string): void {
    this.selectedSize = size;
  }
  addToCart(): void {
    if (this.message === 'Product added to cart!') {
      this.message = '';
    } else {
      this.message = 'Product added to cart!';
    }
  }
}
