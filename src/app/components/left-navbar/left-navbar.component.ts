import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [],
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.scss'
})
export class LeftNavbarComponent {
  plusSign: string = '../../../assets/plus-sign.svg';
  home: string = '../../../assets/home.svg';
  liked: string = '../../../assets/liked.svg';
  notification: string = '../../../assets/notification.svg';
  saved: string = '../../../assets/saved.svg';
  search: string = '../../../assets/search.svg';
  chat: string = '../../../assets/chat.svg';
  defaultAvatar = '../../../assets/default.png';
  name: string = "name";
  handler: string = "@handler";
}
