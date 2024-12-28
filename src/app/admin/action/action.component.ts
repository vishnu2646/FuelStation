import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-action',
    standalone: true,
    imports: [
        MatInputModule,
        FormsModule,
        MatButtonModule
    ],
    templateUrl: './action.component.html',
    styleUrl: './action.component.scss'
})
export class ActionComponent {
    private activatedRoute = inject(ActivatedRoute);

    public actionType: String = '';

    public pumpNo: String = '';

    constructor() {
        this.activatedRoute.params.subscribe(param => {
            this.actionType = param['action'];
            this.pumpNo = param['pumpno'];
        })
    }
}
