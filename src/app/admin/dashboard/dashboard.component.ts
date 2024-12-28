import { Component ,Inject, inject } from '@angular/core';
import { PumpListComponent } from "../../common/pump-list/pump-list.component";
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from '../admin.service';
import { IDashboardTableData } from '../../Type/Type';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        PumpListComponent,
        MatIconModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
    
})
export class DashboardComponent {

    private AdminService = inject(AdminService);
    public tableDatas: IDashboardTableData[] = [];
    public isDashboardLoading: boolean = false;
    public Userid=1;

    public ngOnInit() {
        this.handleGetDashboardData();
         
    }
    
    private handleGetDashboardData() {
        this.isDashboardLoading = !this.isDashboardLoading;
    
        this.AdminService.getDashboardService(this.Userid).subscribe({
            next: (response) => {
                this.tableDatas = response.GetPumpList.Table;
            },
            error: (error) => {
                console.log(error);
                this.isDashboardLoading = !this.isDashboardLoading;
            },
            complete: () => {
                console.log('completed');
                this.isDashboardLoading = !this.isDashboardLoading;
            }
        })
    }

}

 