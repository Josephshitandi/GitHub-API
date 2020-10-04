import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { SearchUsersService } from '../search-users/search-users.service'

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {
  users: Users[];
  // noOfUsers: number;

  constructor(public searchUsers: SearchUsersService) {}
  findUser(term: string){
    this.searchUsers.getUser(term).then(
      () => {
        this.users = this.searchUsers.users;
        // this.noOfUsers = this.searchUsers.users.length;
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
