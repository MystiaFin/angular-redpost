import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottomNavbarComponent {
    plusSign: string = '../../../assets/plus-sign.svg';
    home: string = '../../../assets/home.svg';
    liked: string = '../../../assets/liked.svg';
    notification: string = '../../../assets/notification.svg';
    saved: string = '../../../assets/saved.svg';
    search: string = '../../../assets/search.svg';
}
