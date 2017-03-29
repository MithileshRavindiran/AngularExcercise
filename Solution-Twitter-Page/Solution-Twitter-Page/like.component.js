"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var LikeComponent = (function () {
    function LikeComponent() {
        this.totalLikes = 0;
        this.iLike = false;
    }
    LikeComponent.prototype.onClick = function () {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    };
    __decorate([
        core_1.Input()
    ], LikeComponent.prototype, "totalLikes");
    __decorate([
        core_1.Input()
    ], LikeComponent.prototype, "iLike");
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'like',
            template: "\n    <i\n       class=\"glyphicon glyphicon-heart\" \n       [class.highlighted]=\"iLike\"\n       (click)=\"onClick()\">\n    </i>\n    <span>{{ totalLikes }}</span>\n    ",
            styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n        \n        .highlighted {\n            color: deeppink;\n        }   \n    "]
        })
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map