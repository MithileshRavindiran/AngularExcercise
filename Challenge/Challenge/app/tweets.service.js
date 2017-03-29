/**
 * Created by x073880 on 12/12/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docgen app?",
                            totalLikes: 10,
                            iLike: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            author: "AngularJS News",
                            handle: "@angularjs_news",
                            body: "Right Relevance : Influencers, Articles and Conversations ",
                            totalLikes: 5,
                            iLike: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            author: "UX & Bootstrap",
                            handle: "@3rdwave",
                            body: "10 Reasons Why Web Projects Fail ",
                            totalLikes: 1,
                            iLike: true
                        }];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map