import { Injectable } from '@angular/core';
import { Repos} from '../repos'

@Injectable({
  providedIn: 'root'
})
export class SearchRepositoriesService {
  users: Users[]


  getUser(term: string) {
    let endPoint = `https://api.github.com/search/users?access_token=${environment.apiKey}&q=${term}`;
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(endPoint)
        .toPromise()
        .then(
          (results) => {
            this.users = [];
            for (let i = 0; i < results['items'].length; i++) {
              let name = results['items'][i]['login'];
              let image = results['items'][i]['avatar_url'];
              let github = results['items'][i]['html_url'];
              let liveLink = results['items'][i]['repos_url'];
              let user = new Users(i + 1, name, image, github, liveLink,);
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

  constructor(private http: HttpClient) { }
}
