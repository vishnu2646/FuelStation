import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private darkMode = new BehaviorSubject<boolean>(false);

    public darkMode$ = this.darkMode.asObservable();

    constructor() {
        // Initialize theme based on system preference
        this.checkSystemTheme();
        // Listen for changes in system theme preference
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            this.setTheme(event.matches);
        });
    }

    private checkSystemTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(prefersDark);
    }

    private setTheme(isDarkMode: boolean) {
        this.darkMode.next(isDarkMode);
        this.applyTheme(isDarkMode);
    }

    private applyTheme(isDarkMode: boolean) {
        if (isDarkMode) {
            document.body.classList.add('app-dark-theme');
            document.body.classList.remove('app-light-theme');
        } else {
            document.body.classList.add('app-light-theme');
            document.body.classList.remove('app-dark-theme');
        }
    }

    // Optionally, you can manually toggle the theme
    public toggleTheme() {
        const isDark = this.darkMode.getValue();
        this.setTheme(!isDark);
    }
}
