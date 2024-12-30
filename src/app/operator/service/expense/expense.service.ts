import { inject, Injectable } from '@angular/core';
import { IExpenseTableData } from '../../../types/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

    private http = inject(HttpClient);

    private baseUrl = 'http://192.168.1.42:1130';

    private key="Fuels";

    public expenseService(data?: IExpenseTableData): Observable<any> {
        return this.http.post(`${this.baseUrl}/AddCashExpense?databaseKey=${this.key}`, data) as Observable<any>;
    }
}
