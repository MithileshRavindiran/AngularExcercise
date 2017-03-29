"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var tweet_service_1 = require('./tweet.service');
var tweet_component_1 = require('./tweet.component');
var TweetsComponent = (function () {
    function TweetsComponent(tweetService) {
        this.tweets = tweetService.getTweets();
    }
    TweetsComponent = __decorate([
        core_1.Component({
            selector: 'tweets',
            template: "\n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>\n    ",
            providers: [tweet_service_1.TweetService],
            directives: [tweet_component_1.TweetComponent]
        })
    ], TweetsComponent);
    return TweetsComponent;
}());
exports.TweetsComponent = TweetsComponent;
//# sourceMappingURL=tweets.component.js.map