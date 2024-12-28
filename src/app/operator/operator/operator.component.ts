import { Component } from '@angular/core';
import { PumpListComponent } from "../../common/pump-list/pump-list.component";

@Component({
    selector: 'app-operator',
    standalone: true,
    imports: [PumpListComponent],
    templateUrl: './operator.component.html',
    styleUrl: './operator.component.scss'
})
export class OperatorComponent {

}
