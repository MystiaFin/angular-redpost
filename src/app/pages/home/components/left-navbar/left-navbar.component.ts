import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [],
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.scss'
})
export class LeftNavbarComponent {
  defaultAvatar = '../../../assets/default.png';
  plusSign: string = '../../../assets/plus-sign.svg';
  name: string = "name";
  handler: string = "@handler";
}
