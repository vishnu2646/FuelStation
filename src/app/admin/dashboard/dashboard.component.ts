import { Component } from '@angular/core';
import { PumpListComponent } from "../../common/pump-list/pump-list.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        PumpListComponent,
        MatIconModule
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
