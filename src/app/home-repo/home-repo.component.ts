import { MyReposService } from './../my-repos/my-repos.service';
import { GitHub } from './../git-hub';
import { Repos } from './../repos';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-home-repo',
  templateUrl: './home-repo.component.html',
  styleUrls: ['./home-repo.component.css']
})
export class HomeRepoComponent implements OnInit {
  repos: Repos[];
@Input() users: GitHub;
  constructor(private findRepo: MyReposService) { }

  ngOnInit(): void {
    this.getMyRepos(this.users.live);
  }

  getMyRepos(endpoint) {
    this.findRepo.getRepos(endpoint).then(
      () => {
        this.repos = this.findRepo.repos;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
