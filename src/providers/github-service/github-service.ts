import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

import { User } from '../../app/models/github.user';
import { Repository } from '../../app/models/github.repository';

import { USER_LIST } from '../../app/mocks/users';
import { REPOSITORY_LIST } from '../../app/mocks/repositories';

import {Http, Response} from '@angular/http';


/*
  Generated class for the GithubService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubService {

  baseUrl: string = 'https://api.github.com/users';
  reposUrl: string = 'repos';

  constructor(private http: Http) {
    console.log('Hello GithubService Provider');
  }

  getUserProfileInfo (username:string):Observable<User> {
       return this.http.get (`${this.baseUrl}/${username}`)
       .map (this.extractData)
       .do (this.logData)
       .catch ((error:Response) => Observable.throw (error.json() || 'Server Error!'));
       
  }
  
  getUserRepositories (username:string):Observable<Repository[]> {
      return this.http.get (`${this.baseUrl}/${username}/${this.reposUrl}`).
      
      map ((data:Response) => data.json() as Repository[])
      
      .catch ((error:Response)=> Observable.throw (error.json() || 'Server Error !'))
  }
  
  getMockupUserProfileInfo (username:string):Observable <User> {
    return Observable.of (USER_LIST.filter (user => user.name=== username)[0])
  }

  getMockupUserRepositories (username:string):Observable<Repository[]> {
    return Observable.of (REPOSITORY_LIST.filter(repo => repo.owner.name===username)) 
  }
  
  private extractData (data:Response){
    return data.json();
  }
  private logData (response:Response){
    console.log (response);
  }
}
