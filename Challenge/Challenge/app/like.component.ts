/**
 * Created by x073880 on 12/12/2016.
 */
import {Component,Input} from 'angular2/core';

@Component({
    selector:'like',
    template:`
    <i  class="glyphicon glyphicon-heart" [class.highlighted]="iLike"   (click)="onGlyphiconLickClick()">{{totalLikes}}</i>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        
        .highlighted {
            color: deeppink;
        }   
    `]
})
export class LikeComponent {

   @Input() totalLikes;
   @Input() iLike;
    onGlyphiconLickClick() {
        this.iLike=!this.iLike;
        this.totalLikes+= this.iLike?1:-1;
    }
}
