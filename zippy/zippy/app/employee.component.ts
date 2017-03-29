import {Component,Input} from 'angular2/core';

@Component({
selector:'employees',
template:`
{{ employee.name }}
`
    
})
export class EmployeeComponent {
 @Input() employee;
}