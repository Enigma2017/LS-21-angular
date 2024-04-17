import { Component } from '@angular/core';
import { zoomIn } from '../../../shared/animation';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss',
  animations: [zoomIn],
})
export class CoffeeComponent {
  activeCategory: string = 'all';
  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  public coffeeData = [
    {
      image: 'assets/img/home/cappuccino1.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 1,
    },
    {
      image: 'assets/img/home/cappuccino2.png',
      title: 'Cappuccino',
      desc: 'With Foam',
      id: 2,
    },
    {
      image: 'assets/img/home/cappuccino3.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 3,
    },
  ];
  public price: number = 4.2;
}
