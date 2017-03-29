/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', "angular2/common", 'rxjs/Rx', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map', 'rxjs/add/operator/filter', 'rxjs/add/operator/distinctUntilChanged'], function(exports_1, context_1) {
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
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    //var observable = Observable.fromArray([1,2,3]);
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Rx_1.Observable.fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for the date" + date);
                        return [1, 2, 3];
                    })
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.of(1)
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.of(1, 2, 3)
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.of([1, 2, 3])
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.empty()
                        .subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.range(1, 5).subscribe(function (x) { return console.log(x); });
                    Rx_1.Observable.fromArray([1, 2, 3]).subscribe(function (x) { return console.log(x); });
                    /*var observable = Observable.interval(1000);
                     observable
                         .map(x	=>	{
                             console.log("calling	the	server	to	get	the	latest	news");
                             return [1,2,3,4,5];
                         })
                         /!*.flatMap(x	=>	{
                             console.log("calling	the	server	to	get	the	latest	news");
                             return	Observable.of([1,2,3,4,5]);
                         })*!/
                         .subscribe(news	=>	console.log(news));*/
                    var userStream = Rx_1.Observable.of({
                        userId: 1, username: 'mosh'
                    }).delay(2000);
                    var tweetsStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    Rx_1.Observable
                        .forkJoin(userStream, tweetsStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); })
                        .subscribe(function (result) { return console.log(result); });
                    var errorObservable = Rx_1.Observable.throw(new Error("Something Failed"));
                    errorObservable
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                    var counter = 0;
                    var ajaxCall = Rx_1.Observable.of('url')
                        .flatMap(function () {
                        if (++counter < 2)
                            return Rx_1.Observable.throw(new Error("Request failed"));
                        return Rx_1.Observable.of([1, 2, 3]);
                        //return Observable.throw(new Error("Request failed 3"));
                    });
                    ajaxCall
                        .retry(3)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                    var remoteDataStremExcpetion = Rx_1.Observable.throw(new Error("Exception from the server"));
                    remoteDataStremExcpetion
                        .catch(function (error) {
                        console.log("Remote Date Exception occurs");
                        var localDataStream = Rx_1.Observable.of([4, 5, 6]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log(x); });
                    var remoteDataStream = Rx_1.Observable.of([7, 8, 9]);
                    remoteDataStream
                        .catch(function (error) {
                        console.log("Remote Date Exception occurs");
                        var localDataStream = Rx_1.Observable.of([4, 5, 6]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log("Remote Date is passed " + x); });
                    var remoteDatetimeOutStream = Rx_1.Observable.of([10, 11, 12]).delay(5000);
                    remoteDatetimeOutStream.timeout(1000)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                    var observableForException = Rx_1.Observable.throw(new Error("Error Occured"));
                    observableForException.subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); }, function () { return console.log("Completed"); });
                    var observableForSuccessfulCompletion = Rx_1.Observable.of([13, 14, 15]);
                    observableForSuccessfulCompletion.subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); }, function () { return console.log("Completed"); });
                    search.valueChanges
                        .debounceTime(400)
                        .filter(function (e) { return e.length >= 3; })
                        .distinctUntilChanged()
                        .map(function (str) { return str.replace('', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n          <input id=\"search\" type=\"text\" ngControl=\"search\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map