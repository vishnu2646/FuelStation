import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OperatorComponent } from './operator/operator/operator.component';
import { ActionComponent } from './admin/action/action.component';
import { CollectionComponent } from './operator/collection/collection.component';
import { ExpenseComponent } from './operator/expense/expense.component';
import { CreditComponent } from './operator/credit/credit.component';
import { LoginComponent } from './auth/login/login.component';
import { PageComponent } from './operator/page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        component: DashboardComponent,
    },
    {
        path: 'action',
        component: ActionComponent
    },
    {
        path: 'pages',
        component: PageComponent,
        children: [
            {
                path: 'operator',
                component: OperatorComponent
            },
            {
                path: 'collection/:pumpNo',
                component: CollectionComponent
            },
            {
                path: 'expense/:pumpNo',
                component: ExpenseComponent
            },
            {
                path: 'credit/:pumpNo',
                component: CreditComponent
            }
        ]
    }
];
