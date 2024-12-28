import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
    selector: 'app-collection',
    standalone: true,
    imports: [
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule
    ],
    providers: [
        provideNativeDateAdapter()
    ],
    templateUrl: './collection.component.html',
    styleUrl: './collection.component.scss'
})
export class CollectionComponent {
    private activatedRoute = inject(ActivatedRoute);

    public pumpNo: String = '';

    constructor() {
        this.activatedRoute.params.subscribe(param => {
            this.pumpNo = param['pumpNo']
        });
    }
}
