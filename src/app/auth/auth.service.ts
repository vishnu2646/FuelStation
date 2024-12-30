
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    
    private baseUrl = 'http://192.168.1.42:1130';

    private key="Fuels";

    public loginService(data: IUser): Observable<any> {
        const { UserName, Userpwd } = data;
        return this.http.get(`${this.baseUrl}/CheckLogin?Userpwd=${Userpwd}&UserName=${UserName}&databaseKey=${this.key}`) as Observable<any>;
    }
}
