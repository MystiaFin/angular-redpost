import { Component } from '@angular/core';
import { LeftNavbarComponent } from "./components/left-navbar/left-navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
