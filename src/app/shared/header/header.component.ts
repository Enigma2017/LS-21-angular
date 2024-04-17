import { Component } from '@angular/core';
import { fadeInOut } from '../animation';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [fadeInOut]
})
export class HeaderComponent {
  constructor (public global:GlobalService) {
  }
  public navIsActive = false;
}
