import { Component } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  defaultAvatar = '../../../assets/default.png';
  name: string = "name";
  handler: string = "@handler";
}
