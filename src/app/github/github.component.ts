import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { SearchUserService } from '../search-user/search-user.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: Users[];
  noOfUsers: number;

  constructor(public searchUsers: SearchUserService) {}
  findUser(term: string){
    
    );

  }
 
  ngOnInit(): void {
    this.findUser('joseph')
  }

}

