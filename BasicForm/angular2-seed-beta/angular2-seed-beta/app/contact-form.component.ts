/**
 * Created by x073880 on 12/17/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'

})
export class ContactFormComponent {
    onSubmit(form) {
        console.log(form);
    }
}