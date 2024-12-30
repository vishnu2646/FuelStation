
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    public getUserData() { 
        const userdata  = sessionStorage.getItem('user');
        const userdatajson = userdata ? JSON.parse(userdata) : '';
        return userdatajson;
    }

}
