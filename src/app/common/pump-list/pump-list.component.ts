import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { IDashboardTableData } from '../../types/types';

@Component({
    selector: 'app-pump-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule
    ],
    templateUrl: './pump-list.component.html',
    styleUrl: './pump-list.component.scss'
})
export class PumpListComponent {
    private router = inject(Router);

    @Input()
    public pumps: IDashboardTableData[] = [];

    public isAdmin: boolean = true;

    public handleAssignPump(pump: any) {
        console.log(pump);
    }

    public hanldeActionRoute(pump: any) {
        this.router.navigate(['/action', pump.PumpNo, pump.Status])
    }

    public handleRoute(route: String,pump: any) {
        switch(route) {
            case ('credit'):
                this.router.navigate(['/pages/credit', pump.PumpNo]);
                break;
            case ('expense'):
                this.router.navigate(['/pages/expense', pump.PumpNo]);
                break;
            case ('collection'):
                this.router.navigate(['/pages/collection', pump.PumpNo]);
                break;
            default:
                this.router.navigate(['/admin']);
                break;
        }
    }
}
