import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IconService {
    private iconPaths: { [key: string]: string } = {
        'chat' : '../assets/chat.svg',
        'default' : '../assets/default.png',
        'home' : '../assets/home.svg',
        'liked' : '../assets/liked.svg',
        'notification' : '../assets/notification.svg',
        'plus-sign' : '../assets/plus-sign.svg',
        'saved' : '../assets/saved.svg',
        'search' : '../assets/search.svg',
        'settings' : '../assets/settings.svg',
    };

    getIcon(iconName: string): string {
        return this.iconPaths[iconName] || '';
    }
}
