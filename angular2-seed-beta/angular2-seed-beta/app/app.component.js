System.register(['angular2/core', './courses.component', "./authors.component", "./facilitator.components", "./favourite.component", "./love.Component", "./switch.component"], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, facilitator_components_1, favourite_component_1, love_Component_1, switch_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (facilitator_components_1_1) {
                facilitator_components_1 = facilitator_components_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (love_Component_1_1) {
                love_Component_1 = love_Component_1_1;
            },
            function (switch_component_1_1) {
                switch_component_1 = switch_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = true;
                    this.isSelected = true;
                    this.post = {
                        title: "Title",
                        isSelected: false,
                        isLiked: false,
                        totalLikes: 10
                    };
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log("Div Clicked");
                };
                AppComponent.prototype.onClick = function ($event) {
                    this.isActive = !this.isActive;
                    $event.stopPropagation();
                    console.log("Clicked", $event);
                };
                AppComponent.prototype.onSelectedChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n          <h1>Welcome Angular2</h1>\n          <div (click)=\"onDivClick()\">\n            <courses></courses>\n            <authors></authors>\n            <facilitator></facilitator>\n            <i class=\"glyphicon glyphicon-star\"></i>\n            <favourite [isFavourite]=\"post.isSelected\" (change)=\"onSelectedChange($event)\"></favourite>\n            <love [isLiked]=\"post.isLiked\" [totalLikes]=\"post.totalLikes\"></love>\n            <br>\n            <button class=\"btn btn-primary\" [class.active]=\"isActive\" [style.backgroundColor]=\"isActive? 'green':'red'\" (click)=\"onClick($event)\">Submit</button>\n            <br>\n            <switches></switches>\n            </div>\n",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, facilitator_components_1.FacilitatorComponent, favourite_component_1.FavouriteComponent, love_Component_1.LoveComponent, switch_component_1.SwitchComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map