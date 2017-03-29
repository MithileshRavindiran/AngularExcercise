/**
 * Created by x073880 on 2/2/2017.
 */
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Archives</h1>
        {{ year }} / {{ month }} 
    `
})
export class ArchiveComponent {
    year: number;
    month: number;

    constructor(private _routeParams: RouteParams){
        this.year = parseInt(_routeParams.get("year"));
        this.month = parseInt(_routeParams.get("month"));
    }
}