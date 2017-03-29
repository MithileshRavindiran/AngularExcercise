/**
 * Created by x073880 on 12/1/2016.
 */

import{Component} from 'angular2/core';
import {AuthorsService} from "./authors.service";
import {AutoGrowDirective} from "./auto-grow.directive";

@Component(
    {selector:'authors',
     template:`
        <div>
        <p>{{authorsTitle}}</p>
        <br>
        <input type="text" [(ngModel)]="authorsTitle"autogrow/>
        <br>
        <ul>
        <li *ngFor="#authors of authorsName">
        {{authors}}
        </li>
        </ul>
        </div>
        `
        ,
        providers:[AuthorsService],
        directives:[AutoGrowDirective]
    }
)
export class AuthorsComponent {
    authorsTitle = "Authors";
    authorsName;

    constructor(authorsService:AuthorsService) {
        this.authorsName=authorsService.getAuthorNames();
    }
}