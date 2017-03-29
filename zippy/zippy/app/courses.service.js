/**
 * Created by x073880 on 12/16/2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CoursesService;
    return {
        setters:[],
        execute: function() {
            CoursesService = (function () {
                function CoursesService() {
                }
                CoursesService.prototype.getCourses = function () {
                    return [
                        {
                            courseName: "JSP E0",
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            authors: {
                                authorOne: "Mithilesh",
                                authorTwo: "Mithra",
                                authorThree: "Pavithra"
                            },
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docgen app?",
                            totalLikes: 10,
                            iLike: false
                        },
                        {
                            courseName: "Angular Js E0",
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            authors: {
                                authorOne: "Mithilesh",
                                authorTwo: "Mithra",
                            },
                            handle: "@angularjs_news",
                            body: "Right Relevance : Influencers, Articles and Conversations ",
                            totalLikes: 5,
                            iLike: true
                        },
                        {
                            courseName: "Bootstrap",
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            authors: {
                                authorOne: "Mithilesh",
                                authorThree: "Pavithra"
                            },
                            handle: "@3rdwave",
                            body: "10 Reasons Why Web Projects Fail ",
                            totalLikes: 1,
                            iLike: true
                        }
                    ];
                };
                return CoursesService;
            }());
            exports_1("CoursesService", CoursesService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map