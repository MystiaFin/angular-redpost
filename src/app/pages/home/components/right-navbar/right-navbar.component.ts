import { Component } from '@angular/core';

@Component({
  selector: 'app-right-navbar',
  standalone: true,
  imports: [],
  templateUrl: './right-navbar.component.html',
  styleUrl: './right-navbar.component.scss'
})
export class RightNavbarComponent {
  chatName: string = 'Username';
  chat: string = '../../../../../assets/chat.svg';
}
