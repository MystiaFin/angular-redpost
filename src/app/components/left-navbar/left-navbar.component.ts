import { Component } from '@angular/core';
import { IconService } from 'iconInjection';

@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [],
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.scss'
})
export class LeftNavbarComponent {
    constructor(private svgIconService: IconService) {}

    getIcon(iconName: string): string {
        return this.svgIconService.getIcon(iconName);
    }
  name: string = "name";
  handler: string = "@handler";
}
