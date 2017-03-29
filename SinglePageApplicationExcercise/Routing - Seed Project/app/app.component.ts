import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {ArchiveComponent} from "./archive.component";
import {HomeComponent} from "./home.component";


@RouteConfig([
        { path: '/', name: 'Home', component: HomeComponent },
        { path: '/archives/:year/:month', name: 'Archives', component: ArchiveComponent },
        { path: '/*other', name: 'Other', redirectTo: ['Home'] }

]
)
@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives:[RouterOutlet,RouterLink],
})
export class AppComponent {

    
}