import {Component} from 'angular2/core';
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
      <voter [myVote]="vote.myVote" [voteCount]="vote.voteCount"></voter>
`,
    directives:[VoterComponent]
})
export class AppComponent {
    vote={
        title:"Title",
        myVote:1,
        voteCount:20
    }
}