/**
 * Created by x073880 on 12/3/2016.
 */
import {Component} from 'angular2/core';
import {FacilitatorService} from "./facilitator.service";
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector:'facilitator',
    template:`
        <div>
        <p>{{facilitatorTitle}}</p>
        <br>
        <input type="text" autogrow/>
        <br>
        <ul>
        <li *ngFor="#facilitators of facilitatorName">
        {{facilitators}}
        </li>
        </ul>
        </div>
        `,
        providers:[FacilitatorService],
        directives:[AutoGrowDirective]
 })
export class FacilitatorComponent {
    facilitatorTitle='Title of Facilitator';
    facilitatorName;
    constructor(facilitatorService:FacilitatorService) {
        this.facilitatorName=facilitatorService.getFacilitatorNames();
    }
}
