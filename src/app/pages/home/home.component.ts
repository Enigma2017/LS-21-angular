import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (global:GlobalService) {
    global.pageTitle = ''
    }
}
