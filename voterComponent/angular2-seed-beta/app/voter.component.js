System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let VoterComponent = class VoterComponent {
                constructor() {
                    this.myVote = 0;
                    this.voteCount = 10;
                    this.isVoted = false;
                }
                onNewVoteClick() {
                    if (this.myVote == 1) {
                        return;
                    }
                    ;
                    this.myVote++;
                }
                onDeleteVoteClick() {
                    if (this.myVote == -1) {
                        return;
                    }
                    ;
                    this.myVote--;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoterComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoterComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoterComponent.prototype, "isVoted", void 0);
            VoterComponent = __decorate([
                core_1.Component({
                    selector: 'voter',
                    templateUrl: 'app/voter.template.html',
                    styles: [`.glyphicon-menu-up{
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
                }), 
                __metadata('design:paramtypes', [])
            ], VoterComponent);
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map