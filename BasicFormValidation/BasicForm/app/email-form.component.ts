/**
 * Created by x073880 on 12/20/2016.
 */
import{Component} from 'angular2/core';

@Component({
    selector:'email-form',
    templateUrl:'app/email-form.component.html'
})
export class EmailFormComponent {

    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' },
        { id: 4, label: 'Yearly' }
    ];

  log(x) {
      console.log(x)
  }
    submitForm(form) {
        console.log(form);
    }
}