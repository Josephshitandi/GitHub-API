import { Repos } from './../repos';
import { MyReposService } from './../my-repos/my-repos.service';
import { GitHub } from './../git-hub';
import { MyAccountService } from './../my-account-services/my-account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user: GitHub;
  repos: Repos[];
  constructor(private searchOwner: MyAccountService, private ownerRepo: MyReposService) { }
  getOner(term: string) {
    this.searchOwner.getOwners(term).then(
      () => {
        this.user = this.searchOwner.users[0];
      },
      (error) => {
        console.log(error);
      }
    );
    

  }
  ngOnInit(): void {
    this.getOner('Josephshitandi')
  }

}
