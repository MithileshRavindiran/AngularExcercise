import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {ArchiveService} from './archive.service';

@Component({
    template: `
        <h1>Home Page</h1>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archives', { year: archive.year, month: archive.month }]">
                    {{ archive.year }}/{{ archive.month }}
                </a>
            </li>
        </ul>
    `,
    directives: [RouterLink],
    providers: [ArchiveService]
})
export class HomeComponent {
    archives;
    constructor(private _archiveService:ArchiveService) {
    }

    archives = this._archiveService.getArchivesList();
}