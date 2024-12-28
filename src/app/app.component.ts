import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    public darkMode = false;

    constructor(private themeService: ThemeService) {}

    public ngOnInit() {
        // Subscribe to theme changes
        this.themeService.darkMode$.subscribe((isDark) => {
            this.darkMode = isDark;
        });
    }

    public toggleTheme() {
        // Toggle the theme manually
        this.themeService.toggleTheme();
    }
}
