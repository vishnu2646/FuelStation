import { Component, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { ExpenseService } from '../service/expense/expense.service';

@Component({
    selector: 'app-expense',
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
    templateUrl: './expense.component.html',
    styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
    private router = inject(Router);

    private userService = inject(UserService);

    private ExpenseService = inject(ExpenseService);


    private userData: any;

    public expense = {
        expenseName: '',
        particulars: '',
        ExpById: '',
        ExpAmount: '',
        ExpDate: '',
    }

    public ngOnInit() {
        this.userData = this.userService.getUserData();
        this.expense.ExpById = this.userData.UsrId;
    }

    public SaveExp() {
        this.ExpenseService.expenseService()
        console.log(this.expense);
    }
}
