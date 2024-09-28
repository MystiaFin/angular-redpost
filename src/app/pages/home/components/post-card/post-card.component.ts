import { Component } from '@angular/core';
import { IconService } from "iconInjection";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {

    constructor(private svgIconService: IconService) {}

    getIcon(iconName: string): string {
        return this.svgIconService.getIcon(iconName);
    }
    name: string = "name";
    handler: string = "@handler";
    date: string = "06 May 2024";
    text: string = 'this is a post card';
}
