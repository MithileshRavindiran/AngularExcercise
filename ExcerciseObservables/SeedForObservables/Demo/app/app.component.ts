/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from "angular2/common";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import {ObservableWrapper} from "angular2/src/facade/async";
import {error} from "util";


@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
          <input id="search" type="text" ngControl="search">
        </form>
    `
})
export class AppComponent {

    form: ControlGroup;
    constructor(fb:FormBuilder){
        this.form=fb.group({
            search:[]
        })
        var search = this.form.find('search');
        //var observable = Observable.fromArray([1,2,3]);
        var startDates = [];
        var startDate = new Date();
        for ( var day = -2 ; day <=2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day);
            startDates.push(date);
        }

        Observable.fromArray(startDates)
            .map(date => {
                console.log("Getting deals for the date" + date);
                return	[1,	2,	3];
            })
            .subscribe(x => console.log(x));
        Observable.of(1)
            .subscribe(x => console.log(x));
        Observable.of(1,2,3)
            .subscribe(x => console.log(x));
        Observable.of([1,2,3])
            .subscribe(x => console.log(x));
        Observable.empty()
            .subscribe(x => console.log(x));
        Observable.range(1,5).subscribe(x => console.log(x));
        Observable.fromArray([1,2,3]).subscribe(x => console.log(x));
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

        var userStream = Observable.of({
            userId:	1,	username:	'mosh'
        }).delay(2000);

        var	tweetsStream	=	Observable.of([1,	2,	3]).delay(1500);

        Observable
            .forkJoin(userStream,	tweetsStream)
            .map(joined => new Object({user:joined[0], tweets:joined[1]}))
            .subscribe(result	=>	console.log(result));

        var errorObservable = Observable.throw(new Error("Something Failed"));

        errorObservable
            .subscribe(
            x => console.log(x),
            error => console.error(error)
        );

        var counter = 0;
        var ajaxCall = Observable.of('url')
                    .flatMap(()=> {
                        if (++counter < 2)
                            return Observable.throw(new Error("Request failed"));
                        return Observable.of([1, 2, 3]);
                        //return Observable.throw(new Error("Request failed 3"));
                    });
        ajaxCall
            .retry(3)
            .subscribe(x => console.log(x),
            error => console.error(error));

        var remoteDataStremExcpetion = Observable.throw(new Error("Exception from the server"));

        remoteDataStremExcpetion
            .catch(
            error => {
                console.log("Remote Date Exception occurs")
                var localDataStream = Observable.of([4, 5, 6]);
                return localDataStream;
            }
        )
            .subscribe(x => console.log(x));

        var remoteDataStream = Observable.of([7,8,9]);

        remoteDataStream
            .catch(
                error => {
                    console.log("Remote Date Exception occurs")
                    var localDataStream = Observable.of([4, 5, 6]);
                    return localDataStream;
                }
            )
            .subscribe(x => console.log("Remote Date is passed " + x));

        var remoteDatetimeOutStream = Observable.of([10,11,12]).delay(5000);

        remoteDatetimeOutStream.timeout(1000)
            .subscribe(
                x => console.log(x),
                error => console.error(error)
            );

        var observableForException = Observable.throw(new Error("Error Occured"));
        observableForException.subscribe(
            x => console.log(x),
            error => console.error(error),
        () => console.log("Completed")
        );

        var observableForSuccessfulCompletion = Observable.of([13,14,15]);
        observableForSuccessfulCompletion.subscribe(
            x => console.log(x),
            error => console.error(error),
            () => console.log("Completed")
        );


        search.valueChanges
            .debounceTime(400)
            .filter(e => e.length >= 3)
            .distinctUntilChanged()
            .map(str =>(<string>str).replace('', '-'))
            .subscribe(x => console.log(x));
    }



}