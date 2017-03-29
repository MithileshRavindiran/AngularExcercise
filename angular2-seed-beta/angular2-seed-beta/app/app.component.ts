import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from "./authors.component";
import {FacilitatorComponent} from "./facilitator.components";
import {FavouriteComponent} from "./favourite.component";
import {LoveComponent} from "./love.Component";
import {SwitchComponent} from "./switch.component";

@Component({
    selector: 'my-app',
    template: `
          <h1>Welcome Angular2</h1>
          <div (click)="onDivClick()">
            <courses></courses>
            <authors></authors>
            <facilitator></facilitator>
            <i class="glyphicon glyphicon-star"></i>
            <favourite [isFavourite]="post.isSelected" (change)="onSelectedChange($event)"></favourite>
            <love [isLiked]="post.isLiked" [totalLikes]="post.totalLikes"></love>
            <br>
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive? 'green':'red'" (click)="onClick($event)">Submit</button>
            <br>
            <switches></switches>
            </div>
`,
    directives:[CoursesComponent,AuthorsComponent,FacilitatorComponent,FavouriteComponent,LoveComponent,SwitchComponent]
})
export class AppComponent {
    isActive=true;
    isSelected=true;
    onDivClick() {
        console.log("Div Clicked");
    }
    onClick($event) {
        this.isActive=!this.isActive;
        $event.stopPropagation();
        console.log("Clicked",$event);
    }
    post = {
        title:"Title",
        isSelected:false,
        isLiked:false,
        totalLikes:10

    }

    onSelectedChange($event){
        console.log($event);
    }
}