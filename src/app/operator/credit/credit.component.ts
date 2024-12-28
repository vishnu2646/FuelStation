import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-credit',
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule
    ],
    templateUrl: './credit.component.html',
    styleUrl: './credit.component.scss'
})
export class CreditComponent {
    private activatedRoute = inject(ActivatedRoute);

    public pumpNo: String = '';

    constructor() {
        this.activatedRoute.params.subscribe(param => {
            this.pumpNo = param['pumpNo']
        });
    }
}
