/**
 * Created by x073880 on 1/19/2017.
 */
System.register(['angular2/core', "./github.service", "angular2/http", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, github_service_1, http_1, Rx_1;
    var GithubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            GithubComponent = (function () {
                function GithubComponent(_gitHubService) {
                    this._gitHubService = _gitHubService;
                    this.isLoading = true;
                    this.username = "octocat";
                    this.user = {};
                    this.followers = [];
                }
                GithubComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Rx_1.Observable.forkJoin(this._gitHubService.getUsers(this.username), this._gitHubService.getFollowers(this.username))
                        .subscribe(function (res) {
                        //this.user = res[0];
                        //this.followers = res[1];
                    }, null, function () { _this.isLoading = false; });
                };
                GithubComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profi',
                        styles: [
                            "\n            .avatar {\n                width: 100;\n                height: 100;\n                border-radius: 100%;\n            }\n        "
                        ],
                        template: "\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        <h2>@{{ user.login }}</h2>\n        <img class=\"avatar\" src=\"{{ user.avatar_url }}\">\n        \n        <h3>Followers</h3>\n        <div *ngFor=\"#follower of followers\" class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object avatar\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{ follower.login }}</h4>\n            </div>\n        </div>        \n    ",
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubComponent);
                return GithubComponent;
            }());
            exports_1("GithubComponent", GithubComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map