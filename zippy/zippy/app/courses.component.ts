import {Component,Input} from "angular2/core";
import {CoursesService} from "./courses.service";
/**
 * Created by x073880 on 12/16/2016.
 */

@Component({
    selector:'courses',
    templateUrl:'app/courses.template.html',
    styles:[`
    .courses{
    border: 10px solid #FFFFFF;
    border-radius: 10px;
    }
    .courses .course {
     color:orange;
     font-weight: bold;
        }
    .zippy .content {
            padding: 20px;
        }
    .zippy .title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
            height: 200px;
            width: 50%;
        }
        
        .media-object {
            border-radius: 10px;
            padding-top: 50px;
        }
        .media-body {
            border-radius: 10px;
            padding-top: 50px;
        }
        `],
    providers:[CoursesService]
})
export class CourseComponent {
    @Input() course;
    @Input('checked') isChecked;
    changeCheckStatus() {
        this.isChecked = !this.isChecked;
    }
   
}