import { Component } from '@angular/core';
import { zoomIn } from '../../../shared/animation';

@Component({
  selector: 'app-coffee-beans',
  templateUrl: './coffee-beans.component.html',
  styleUrl: './coffee-beans.component.scss',
  animations: [zoomIn],
})
export class CoffeeBeansComponent {
  public coffeeData = [
    {
      image: 'assets/img/home/beans1.png',
      title: 'Robusta Beans',
      desc: 'Medium Roasted',
      id: 4,
    },
    {
      image: 'assets/img/home/beans2.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 5,
    },
    {
      image: 'assets/img/home/beans3.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 6,
    },
    {
      image: 'assets/img/home/beans4.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 7,
    },
  ];
  public price: number = 4.2;
}
