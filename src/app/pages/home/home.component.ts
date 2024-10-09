import { Component } from '@angular/core';
import { LeftNavbarComponent } from "../../components/left-navbar/left-navbar.component";
import { PostCardComponent } from "./components/post-card/post-card.component";
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { RightNavbarComponent } from "./components/right-navbar/right-navbar.component";
import { CreateHeaderComponent } from "./components/create-header/create-header.component";
import {BottomNavbarComponent} from "../../components/bottom-navbar/bottom-navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LeftNavbarComponent, 
    PostCardComponent, 
    TopNavbarComponent, 
    RightNavbarComponent, 
    CreateHeaderComponent, 
    BottomNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
