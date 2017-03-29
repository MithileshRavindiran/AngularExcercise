/**
 * Created by x073880 on 12/8/2016.
 */
import {Component,Input} from 'angular2/core';

@Component({
    selector:'voter',
    templateUrl:'app/voter.template.html',
    styles:[`.glyphicon-menu-up{
    color:#ccc;
    cursor:pointer;
    }
    .glyphicon-menu-down{
    color:#ccc;
    cursor:pointer;
    }
    .highlighted {
    color:deeppink;
    }`]
})
export class VoterComponent {
    @Input() myVote=0;
    @Input()voteCount=10;
    @Input() isVoted=false;

    onNewVoteClick() {
        if (this.myVote == 1){
            return
        };
        this.myVote++;
    }

    onDeleteVoteClick() {
        if (this.myVote == -1){
            return
        };
        this.myVote--;
    }


}
