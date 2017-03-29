/**
 * Created by x073880 on 12/7/2016.
 */
import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector:'favourite',
    templateUrl:'app/favourite.template.html',
    styles:[`
    .glyphicon-star{
    color:orange;
    }`]

})
export class FavouriteComponent {
    @Input('isFavourite') isSelected=true;

    @Output() change = new EventEmitter();
    onGlyphiconClick() {
        this.isSelected=!this.isSelected;
        this.change.emit({newValue: this.isSelected});
    }
}