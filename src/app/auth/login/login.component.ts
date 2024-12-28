import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

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

    public isLoading: boolean = false;

    public handleLogin() {
        this.isLoading = !this.isLoading;

        setTimeout(() => {
            this.isLoading = !this.isLoading;
            this.router.navigate(['/admin']);
        }, 5000);

    }
}
