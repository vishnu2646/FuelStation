import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Ipump } from '../types';
import { Router, RouterModule } from '@angular/router';

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

    public pumps: Ipump[] = [
        {
            "pumpno": "GVR2 B2",
            "partdesc": "DIESEL",
            "reading": 350864,
            "operator": "open",
            "status": "open",
        },
        {
            "pumpno": "GVR2 B1",
            "partdesc": "DIESEL",
            "reading": 307006,
            "operator": "open",
            "status": "open",
        },
        {
            "pumpno": "GVR2 A2",
            "partdesc": "PETROL",
            "reading": 263148,
            "operator": "Govindh",
            "status": "open",
        },
        {
            "pumpno": "GVR2 A1",
            "partdesc": "PETROL",
            "reading": 219290,
            "operator": "open",
            "status": "open",
        },
        {
            "pumpno": "GVR1 B2",
            "partdesc": "DIESEL",
            "reading": 175432,
            "operator": "open",
            "status": "close",
        },
        {
            "pumpno": "GVR1 B1",
            "partdesc": "DIESEL",
            "reading": 131574,
            "operator": "open",
            "status": "close"
        }
    ];

    public isAdmin: boolean = true;

    public handleAssignPump(pump: Ipump) {
        console.log(pump);
    }

    public hanldeActionRoute(pump: Ipump) {
        this.router.navigate(['/action', pump.pumpno, pump.status])
    }

    public handleRoute(route: String,pump: Ipump) {
        switch(route) {
            case ('credit'):
                this.router.navigate(['/pages/credit', pump.pumpno]);
                break;
            case ('expense'):
                this.router.navigate(['/pages/expense', pump.pumpno]);
                break;
            case ('collection'):
                this.router.navigate(['/pages/collection', pump.pumpno]);
                break;
            default:
                this.router.navigate(['/admin']);
                break;
        }
    }
}
