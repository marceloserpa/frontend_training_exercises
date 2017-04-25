import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { GithubApiService } from '../shared/github-api.service';

@Component({
  selector: 'app-repo-card-list',
  templateUrl: './repo-card-list.component.html',
  styleUrls: ['./repo-card-list.component.css']
})
export class RepoCardListComponent implements OnInit{

  private repositories: Observable<any[]>;

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit(){
    this.repositories = this.githubApiService.listRepositories();
  }

}
