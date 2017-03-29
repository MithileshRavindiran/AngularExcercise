System.register(["angular2/core", "./courses.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_service_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            /**
             * Created by x073880 on 12/16/2016.
             */
            CourseComponent = (function () {
                function CourseComponent() {
                }
                CourseComponent.prototype.changeCheckStatus = function () {
                    this.isChecked = !this.isChecked;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CourseComponent.prototype, "course", void 0);
                __decorate([
                    core_1.Input('checked'), 
                    __metadata('design:type', Object)
                ], CourseComponent.prototype, "isChecked", void 0);
                CourseComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        templateUrl: 'app/courses.template.html',
                        styles: ["\n    .courses{\n    border: 10px solid #FFFFFF;\n    border-radius: 10px;\n    }\n    .courses .course {\n     color:orange;\n     font-weight: bold;\n        }\n    .zippy .content {\n            padding: 20px;\n        }\n    .zippy .title:hover{\n            background: #f0f0f0;\n            cursor: pointer;\n        }\n        .handle {\n            color: #ccc;\n        }\n        \n        .media {\n            margin-bottom: 20px;\n            height: 200px;\n            width: 50%;\n        }\n        \n        .media-object {\n            border-radius: 10px;\n            padding-top: 50px;\n        }\n        .media-body {\n            border-radius: 10px;\n            padding-top: 50px;\n        }\n        "],
                        providers: [courses_service_1.CoursesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map