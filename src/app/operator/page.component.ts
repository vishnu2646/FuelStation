import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-page',
    standalone: true,
    imports: [
        MatIconModule,
        RouterModule
    ],
    templateUrl: './page.component.html',
    styleUrl: './page.component.scss'
})
export class PageComponent {
    private loaction = inject(Location);

    public handleRouteBack(): void {
        this.loaction.back();
    }
}
