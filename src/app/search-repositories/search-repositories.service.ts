import { Injectable } from '@angular/core';
import { Repos} from '../repos';
import { environment} from  '../../environments/environment';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchRepositoriesService {
  repos: Repos[]


  getRepo(term: string) {
    let endPoint = `https://api.github.com/search/repositories?access_token=${environment.apiKey}&q=${term}`;
    let promise = new Promise((resolve, reject) => {
      this.http.get(endPoint).toPromise().then((results) => {
            this.repos = [];
            for (let i = 0; i < results['items'].length; i++) {
              let fullName = results['items'][i]['full_name'];
              let description = results['items'][i]['description'];
              let language = results['items'][i]['language'];
              let year = parseInt(results['items'][i]['created_at'].substr(0, 4));
              let month = parseInt(results['items'][i]['created_at'].substr(5, 7)) - 1;
              let day = parseInt(results['items'][i]['created_at'].substr(8, 10));
              let date = new Date(year, month, day);
              let github = results['items'][i]['html_url'];
              let live = results['items'][i]['homepage'];
              let repo = new Repos(i + 1,fullName,description,language,date,github,live);
              this.repos.push(repo);
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
