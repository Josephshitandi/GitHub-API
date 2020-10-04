import { Injectable } from '@angular/core';
import { Users } from '../users';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {
users: Users[]
  

  getUser(searchTerm: string){
  let userEndpoint = `https://api.github.com/search/users?access_token=${environment.apiKey}&q=${searchTerm}`;
  let promise = new Promise((resolve, reject) => {
    this.userHttp.get(userEndpoint).toPromise().then((results) => {this.users = [];
          for (let i = 0; i < results['items'].length; i++) {
            let name = results['items'][i]['login'];
            let image = results['items'][i]['avatar_url'];
            let repositories = results['items'][i]['repos_url'];
            let github = results['items'][i]['html_url'];
            let user = new Users( name, image,repositories, github);
            this.users.push(user);
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

  constructor(private userHttp: HttpClient) { }
}
