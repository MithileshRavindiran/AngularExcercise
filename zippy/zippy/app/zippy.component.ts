import {Component, Input} from "angular2/core";
/**
 * Created by x073880 on 12/16/2016.
 */
    
@Component({
    selector:'zippy',
    template:`
    <div class="zippy">
    <div class="title" (click)="toggle()">
    {{title}}
    <i 
                class="pull-right glyphicon" 
                [ngClass]="
                    { 
                        'glyphicon-chevron-down': !isExpanded, 
                        'glyphicon-chevron-up': isExpanded 
                    }">
            </i>
    </div>
    <div *ngIf="isExpanded" class="content">
    <ng-Content></ng-Content>
    </div>
    </div>
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
        `]
})    
export class ZippyComponent {
    isExpanded = false;
    @Input() title;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}