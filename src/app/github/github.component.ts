import { SearchRepositoriesService } from './../search-repositories/search-repositories.service';
import { Repos } from './../repos';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { SearchUserService } from '../search-user/search-user.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: Users[];
  repos: Repos[];
  noOfUsers: number;
  noOfRepos: number;

  constructor(public searchUsers:  SearchUserService, public searchRepos: SearchRepositoriesService) {}
  findUser(term: string){
    this.searchUsers.getUser(term).then(
      () => {
        this.users = this.searchUsers.users;
        this.noOfUsers = this.searchUsers.users.length;
      },
      (error) => {
        console.log(error);
      }
    );
    this.searchRepos.getRepo(term).then(
      () => {
        this.repos = this.searchRepos.repos;
        this.noOfRepos = this.searchRepos.repos.length;
      },
      (error) => {
        console.log(error);
      }
    );

  }
 
  ngOnInit(): void {
    this.findUser('joseph')
  }

}

