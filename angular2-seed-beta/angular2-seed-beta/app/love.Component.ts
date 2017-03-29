/**
 * Created by x073880 on 12/8/2016.
 */
import {Component,Input} from 'angular2/core';
@Component({
    selector:'love',
    templateUrl:'app/love.template.html',
    styles:[`
    .glyphicon-heart{
    color:#ccc;
    cursor:pointer;
    }
    .highlighted {
    color:deeppink;
    }`]
    
})
export class LoveComponent {
    @Input() isLiked=false;
    @Input() totalLikes=0;

    onGlyphiconLickClick() {
        this.isLiked=!this.isLiked;
        if(this.isLiked) {
            this.totalLikes++;
        } else {
            this.totalLikes--;
        }
    }
    
}
