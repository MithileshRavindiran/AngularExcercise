System.register(['angular2/core', "./zippy.component", "./courses.component", "./courses.service", "./employee.component", "./employee.service", "./summary.pipe"], function(exports_1, context_1) {
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
    var core_1, zippy_component_1, courses_component_1, courses_service_1, employee_component_1, employee_service_1, summary_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (employee_component_1_1) {
                employee_component_1 = employee_component_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(coursesService, employeeService) {
                    this.employee = {
                        name: "Mithilesh",
                        country: "Netherlands",
                        rating: 4.9775,
                        coEmployers: 1238,
                        attendance: 99.95,
                        salary: 72000
                    };
                    this.post = {
                        title: "Angular tutorial for beginners",
                        body: "\n        You should have a basic understanding of JavaScript and any text editor. \n        As we are going to develop web-based applications using Angular 2, it will be good if you have an understanding of other web technologies such as \n        HTML, CSS, AJAX, AngularJS etc.\n        "
                    };
                    this.courses = coursesService.getCourses();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<h1>Zippy</h1>\n<zippy title=\"Who can see my stuff?\">Conent of Who can see my stuff?</zippy>\n<zippy title=\"Who can contact me?\">Content of who can contact me</zippy>\n<div *ngFor=\"#course of courses\">\n <courses [course]=\"course\" [checked]=\"false\"></courses>\n</div>\n<!--<employees [employee]=\"employee\"></employees> -->\n<!--{{ employee.name | uppercase}}\n<br>\n{{ employee.country | lowercase}}\n<br>\n{{ employee.rating | number:'2.2-2' }}\n<br>\n{{  employee.coEmployers | number }}\n<br>\n{{ employee.attendance }}\n<br>\n{{ employee.salary | currency:'EUR':true}}\n<br>\n{{ employee | json }} -->\n<!--<br>\n{{ post.title }}\n<br>\n{{ post.body | summary:10}} -->\n",
                        styles: ["\n    .zippy{\n    \n    border: 1px solid #ccc;\n    border-radius: 2px;\n    }\n    .zippy .title {\n     color:orange;\n     padding: 20px;\n     font-weight: bold;\n        }\n    .zippy .content {\n            padding: 20px;\n        }\n    .zippy .title:hover{\n            background: #f0f0f0;\n            cursor: pointer;\n        }\n        "],
                        directives: [zippy_component_1.ZippyComponent, courses_component_1.CourseComponent, employee_component_1.EmployeeComponent],
                        providers: [courses_service_1.CoursesService, employee_service_1.EmployeeService],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService, employee_service_1.EmployeeService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map