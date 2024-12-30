import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDashboard } from '../types/types';
 

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private httpClient = inject(HttpClient);
   
    private baseUrl = 'http://192.168.1.42:1130';

    private databaseKey="Fuels";

    public getDashboardService(): Observable<IDashboard> {
        const userdata  = sessionStorage.getItem('user');
        const userdatajson = userdata ? JSON.parse(userdata) : '';
       
        const getUsrid= userdatajson.UsrId;

        return this.httpClient.get<IDashboard>(`${this.baseUrl}/GetPumpList?UsrId=${getUsrid}&databaseKey=${this.databaseKey}`)
    }

    public getEmployeListService(data: any): Observable<any> {
        const { UsrName, SessionId } = data;
        return this.httpClient.get(`${this.baseUrl}/GetEmpList?User=${UsrName}&Sessid=${SessionId}&databaseKey=${this.databaseKey}`)
    }

    public getPumpService(data: any): Observable<any> {
        const { PumpId, OperatorId, OpenReading, OpenByid, Itemid, Rate, UsrId, Pdocid } = data;
        return this.httpClient.get<any>(`${this.baseUrl}/OpenPump?PumpId=${PumpId}&OperatorId=${OperatorId}&OpenReading=${OpenReading}&OpenByid=${OpenByid}&Itemid=${Itemid}&Rate=${Rate}&UsrId=${UsrId}&Pdocid=${Pdocid}&databaseKey=${this.databaseKey}`)
    }   
}

