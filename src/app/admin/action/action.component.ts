import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../operator/service/user/user.service';
import { AdminService } from '../admin.service';

@Component({
    selector: 'app-action',
    standalone: true,
    imports: [
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatSelectModule,
    ],
    templateUrl: './action.component.html',
    styleUrl: './action.component.scss'
})
export class ActionComponent implements OnInit {
    private activatedRoute = inject(ActivatedRoute);

    private userService = inject(UserService);

    private adminService = inject(AdminService);

    private userData: any;

    public actionType: String = '';

    public pumpNo: String = '';

    public isClosing: boolean = false;

    public operatorsList: any[] = [];

    public openPumpDetails = {
        PumpId: 0,
        OperatorId: 0,
        OpenReading: 0,
        OpenByid: 0,
        Itemid: 0,
        Rate: 0,
        UsrId: 0,
        Pdocid: 0
    }

    public ngOnInit() {
        this.handleGetUserData();
        const { itemid, pumpid, OpReading, Rate } = history.state.pump;
        const { action } = history.state;
        this.actionType = action;
        if(action === 'Close') {
            this.isClosing = !this.isClosing;
        }
        this.openPumpDetails.Itemid = itemid;
        this.openPumpDetails.PumpId = pumpid;
        this.openPumpDetails.OpenReading = OpReading;
        this.openPumpDetails.Rate = Rate;
        this.handleGetEmployeList();
    }

    public handleSelectionChange(event: MatSelectChange) {
        this.openPumpDetails.OperatorId = event.value;
    }

    public savePumpDetails() {
        this.adminService.getPumpService(this.openPumpDetails).subscribe({
            next: (response) => {
                console.log(response);
            },
            error: (error) => {
                console.log(error)
            },
            complete: () => {
                console.log("complete")
            }
        })
    }

    private handleGetEmployeList() {
        this.adminService.getEmployeListService(this.userData).subscribe({
            next: (response) => {
                const responseData = response.GetEmpList.Table1;
                this.operatorsList = responseData;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log("complete");
            }
        })
    }

    private handleGetUserData() {
        const userData = this.userService.getUserData();
        this.userData = userData;
        this.openPumpDetails.OpenByid = userData.UsrId;
        this.openPumpDetails.UsrId = userData.UsrId;
    }
}
