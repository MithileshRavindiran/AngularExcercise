import {Component} from 'angular2/core';
import {EmailFormComponent} from "./email-form.component";

@Component({
    selector: 'my-app',
    template: `
<h1>My Basic Form Validation</h1>
<email-form></email-form>
`,
    directives:[EmailFormComponent]
})
export class AppComponent {

}