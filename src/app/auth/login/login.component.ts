import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { v4 as uuidv4 } from 'uuid';



@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        MatInputModule,
        MatButtonModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    private router = inject(Router);

    private authService = inject(AuthService);
  
    public isLoading: boolean = false;

    public user = {
        Userpwd: '',
        UserName: '',
    }
    
    public handleLogin() {
        this.isLoading = !this.isLoading;

        this.authService.loginService(this.user).subscribe({
            next: (response) => {
                const responseData = response.CheckLoginjs.Table[0];
                const sessionId = uuidv4();
                responseData.SessionId = sessionId;
                sessionStorage.setItem('user', JSON.stringify(responseData));
                this.isLoading = !this.isLoading;
                this.router.navigate(['/admin'])
            },
            error: (error) => {
                console.log(error);
                this.isLoading = !this.isLoading;
            },
            complete: () => {
                console.log("completed")
            }
        })

    }
}
