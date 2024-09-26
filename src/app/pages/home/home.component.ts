import { Component } from '@angular/core';
import { LeftNavbarComponent } from "../../components/left-navbar/left-navbar.component";
import { PostCardComponent } from "./components/post-card/post-card.component";
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { RightNavbarComponent } from "./components/right-navbar/right-navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftNavbarComponent, PostCardComponent, TopNavbarComponent, RightNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
