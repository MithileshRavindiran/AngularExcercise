import {Component} from 'angular2/core';
import {TweetComponent} from "./tweet.component";
import {TweetsService} from "./tweets.service";

@Component({
    selector: 'my-app',
    template: `
<h1>{{title}}</h1>
<div *ngFor="#tweet of tweets">
   <tweet [data]="tweet"></tweet>
</div>
`,
    providers:[TweetsService],
    directives:[TweetComponent]
})
export class AppComponent {
    title="Twitter Layout Challenge";
    tweets;

    constructor(tweetsService:TweetsService) {
        this.tweets=tweetsService.getTweets();
    }

}