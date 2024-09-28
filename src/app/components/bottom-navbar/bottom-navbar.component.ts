import { Component } from '@angular/core';
import { IconService} from "iconInjection";

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottomNavbarComponent {

    constructor(private svgIconService: IconService) {}

    getIcon(iconName: string): string {
        return this.svgIconService.getIcon(iconName);
    }

    plusSign: string = '../../../assets/plus-sign.svg';
    home: string = '../../../assets/home.svg';
    notification: string = '../../../assets/notification.svg';
    search: string = '../../../assets/search.svg';
}
