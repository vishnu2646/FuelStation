import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDashboard } from '../Type/Type';
 

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private httpClient = inject(HttpClient);
    private baseUrl = 'http://192.168.1.42:1130';
    private databaseKey="Fuels";
    private Usrid=1;
    public getDashboardService(Usrid: number): Observable<IDashboard> {
        return this.httpClient.get<IDashboard>(`${this.baseUrl}/GetPumpList?UsrId=${Usrid}&databaseKey=${this.databaseKey}`)
    }

    constructor() { }
}

