import { Component, OnInit } from '@angular/core';
import { Users } from '../users'

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {
  users: Users[];

  constructor() { }

  ngOnInit(): void {
  }

}
