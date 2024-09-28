import { Component } from '@angular/core';
import { IconService } from 'iconInjection';

@Component({
  selector: 'app-right-navbar',
  standalone: true,
  imports: [],
  templateUrl: './right-navbar.component.html',
  styleUrl: './right-navbar.component.scss'
})
export class RightNavbarComponent {
  chatName: string = 'Username';
    constructor(private svgIconService: IconService) {}

    getIcon(iconName: string): string {
        return this.svgIconService.getIcon(iconName);
    }
}
