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

  constructor(public searchUsers: SearchUsersService) { }
  


  ngOnInit(): void {
  }

}
