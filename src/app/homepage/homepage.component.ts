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
  users: GitHub[];
  constructor(private searchOwner: MyAccountService, private route: ActivatedRoute) { }
  getOner(term: string) {
    this.searchOwner.getOwners(term).then(
      () => {
        this.users = this.searchOwner.users;
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
