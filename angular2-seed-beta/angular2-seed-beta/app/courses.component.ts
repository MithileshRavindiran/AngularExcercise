/**
 * Created by x073880 on 12/1/2016.
 */

import {Component} from 'angular2/core';
import {CoursesService} from './courses.service';
import {AutoGrowDirective} from "./auto-grow.directive";

@Component( {
    selector:'courses',
    template:`
           <h2>Courses</h2>
           {{title}}
           <input type="text" autogrow/>
           <div>
           <ul>
              <li *ngFor="#course of courses">
              {{course}}
              </li>
           </ul>
           </div>
           `
            ,
          providers:[CoursesService],
          directives:[AutoGrowDirective]
})
export class CoursesComponent {
    title:string = "The title of the  Courses Page";
    courses;

    constructor(coursesService: CoursesService) {
        this.courses=coursesService.getCourses();
    }
}