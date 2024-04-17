import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor (global:GlobalService) {
    global.pageTitle = 'Cart'
    }
}
