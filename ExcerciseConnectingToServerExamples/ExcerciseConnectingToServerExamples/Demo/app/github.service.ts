import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
/**
 * Created by x073880 on 1/19/2017.
 */

@Injectable()
export class GithubService {

    private _baseUrl="https://api.github.com/users/";
    
    constructor(private _http:Http) {

    }

    getUsers(userName : String)  {
        return this._http.get(this._baseUrl + userName)
            .map(res => res.json());
    }

    getFollowers(userName : String) {
        return this._http.get(this._baseUrl + userName + "/followers")
            .map(res => res.json());
    }


}