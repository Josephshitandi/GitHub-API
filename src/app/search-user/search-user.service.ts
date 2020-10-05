import { Injectable } from '@angular/core';
import { Users } from '../users';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { GitHub } from '../git-hub';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  users: Users[];
//usersFound: GitHub[];

  getUser(term: string) {
    let endPoint = `https://api.github.com/search/users?access_token=${environment.apiKey}&q=${term}`;
    let promise = new Promise((resolve, reject) => {
      this.http.get(endPoint).toPromise().then((results) => {
        this.users = [];
        //this.usersFound = [];
        for (let i = 0; i < results['items'].length; i++) {
          let name = results['items'][i]['login'];
          let image = results['items'][i]['avatar_url'];
          let github = results['items'][i]['html_url'];
          let liveLink = results['items'][i]['repos_url'];
          let user = new Users(i + 1, name, image, github, liveLink,);
          //let githubusers = new GitHub(i + 1, name, image, github, liveLink,);
          this.users.push(user);
          //this.usersFound.push(githubusers)
        }
        resolve();
      },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient) { }
}

