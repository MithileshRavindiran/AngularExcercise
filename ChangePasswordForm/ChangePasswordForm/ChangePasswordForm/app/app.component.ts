import {Component} from 'angular2/core';
import {ChangePasswordFormComponent} from "./ChangePasswordFormComponent";

@Component({
    selector: 'my-app',
    template: `
       <h1>Change Password From</h1>
       <changepassword-form></changepassword-form>
`,
    directives:[ChangePasswordFormComponent]
})
export class AppComponent { }