import { HttpClient } from '@angular/common/http';
import { Repos } from './../repos';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyReposService {
  repos: Repos[];
  myRepos: Repos[];


  getRepos(term: string) {
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
  getMyRepos(endpoint) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Repos[]>(endpoint + '?access_token=' + environment.apiKey)
        .toPromise()
        .then(
          (response) => {
            this.myRepos = [];
            for (let i = 0; i < response.length; i++) {
              let name = response[i]['full_name'];
              let description = response[i]['description'];
              let language = response[i]['language'];
              let year = parseInt(response[i]['created_at'].substr(0, 4));
              let month = parseInt(response[i]['created_at'].substr(5, 7)) - 1;
              let day = parseInt(response[i]['created_at'].substr(8, 10));
              let date = new Date(year, month, day);
              let gitHubLink = response[i]['html_url'];
              let liveLink = response[i]['homepage'];
              let repo = new Repos(
                i + 1,
                name,
                description,
                language,
                date,
                gitHubLink,
                liveLink
              );
              this.myRepos.push(repo);
            }

            resolve();
          },
          (error) => {
            console.log(error);

            reject(error);
          }
        );
    });
    return promise;
  }
  constructor(private http: HttpClient) { }
}
