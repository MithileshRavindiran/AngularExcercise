import {Component} from 'angular2/core';
import {ZippyComponent} from "./zippy.component";
import {CourseComponent} from "./courses.component";
import {CoursesService} from "./courses.service";
import {EmployeeComponent} from "./employee.component";
import {EmployeeService} from "./employee.service";
import {SummaryPipe} from "./summary.pipe";

@Component({
    selector: 'my-app',
    template: `
<h1>Zippy</h1>
<zippy title="Who can see my stuff?">Conent of Who can see my stuff?</zippy>
<zippy title="Who can contact me?">Content of who can contact me</zippy>
<div *ngFor="#course of courses">
 <courses [course]="course" [checked]="false"></courses>
</div>
<!--<employees [employee]="employee"></employees> -->
<!--{{ employee.name | uppercase}}
<br>
{{ employee.country | lowercase}}
<br>
{{ employee.rating | number:'2.2-2' }}
<br>
{{  employee.coEmployers | number }}
<br>
{{ employee.attendance }}
<br>
{{ employee.salary | currency:'EUR':true}}
<br>
{{ employee | json }} -->
<!--<br>
{{ post.title }}
<br>
{{ post.body | summary:10}} -->
`,
    styles:[`
    .zippy{
    
    border: 1px solid #ccc;
    border-radius: 2px;
    }
    .zippy .title {
     color:orange;
     padding: 20px;
     font-weight: bold;
        }
    .zippy .content {
            padding: 20px;
        }
    .zippy .title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        `],
    directives:[ZippyComponent,CourseComponent,EmployeeComponent],
    providers:[CoursesService,EmployeeService],
    pipes:[SummaryPipe]
})
export class AppComponent {
    courses;
    employee = {
    name: "Mithilesh",
    country: "Netherlands",
    rating:4.9775,
    coEmployers:1238,
    attendance:99.95,
    salary:72000
    };
    post = {
        title: "Angular tutorial for beginners",
        body:`
        You should have a basic understanding of JavaScript and any text editor. 
        As we are going to develop web-based applications using Angular 2, it will be good if you have an understanding of other web technologies such as 
        HTML, CSS, AJAX, AngularJS etc.
        `
    }
    constructor(coursesService:CoursesService, employeeService:EmployeeService) {
        this.courses=coursesService.getCourses();
    }


}