/**
 * Created by x073880 on 1/19/2017.
 */

import {Component, OnInit} from 'angular2/core';
import {GithubService} from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'github-profi',
    styles: [
        `
            .avatar {
                width: 100;
                height: 100;
                border-radius: 100%;
            }
        `
    ],
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h2>@{{ user.login }}</h2>
        <img class="avatar" src="{{ user.avatar_url }}">
        
        <h3>Followers</h3>
        <div *ngFor="#follower of followers" class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>        
    `,
    providers:[GithubService,HTTP_PROVIDERS]
})
export class GithubComponent implements OnInit{
    isLoading = true;
    username = "octocat";
    user = {};
    followers = [];

    constructor(private _gitHubService: GithubService){
    }

    ngOnInit(){
        Observable.forkJoin(
            this._gitHubService.getUsers(this.username),
            this._gitHubService.getFollowers(this.username)
        )
            .subscribe(
                res => {
                    //this.user = res[0];
                    //this.followers = res[1];
                },
                null,
                () => { this.isLoading = false; })
    }
}
