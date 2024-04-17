import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {
  message: string = '';
  backgroundImageUrl: string = 'assets/img/home/coffee-bg.png';
  product: any = {
    title: 'Robusta Beans',
    desc: 'From Africa',
    rating: 4.5,
  };

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  addToFavorites(): void {}
}
