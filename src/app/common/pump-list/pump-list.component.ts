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

    public handleAssignPump(pump: IDashboardTableData) {
        if(pump.Status === 'Closed') {
            this.router.navigateByUrl('/action', {state: {pump: pump, action: 'Open'}})
        }
    }

    public hanldeActionRoute(pump: IDashboardTableData) {
        if(pump.Status === 'Open') {
            this.router.navigateByUrl('/action', {state: {pump: pump, action: 'Close'}})
        } else if(pump.Status === 'Closed') {
            console.log("in if");
            // this.router.navigate(['/action', pump.PumpNo, 'Open']);
            this.router.navigateByUrl('/action', {state: {pump: pump, action: 'Open'}})
        }
    }

    public handleRoute(route: String,pump: IDashboardTableData) {
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
