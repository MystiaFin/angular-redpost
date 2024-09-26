import { Component } from '@angular/core';

@Component({
  selector: 'app-right-navbar',
  standalone: true,
  imports: [],
  templateUrl: './right-navbar.component.html',
  styleUrl: './right-navbar.component.scss'
})
export class RightNavbarComponent {
  groupName: string = 'Group Name';
}
