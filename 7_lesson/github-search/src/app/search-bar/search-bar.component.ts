import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../shared/github-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{

  term: string = '';  

  constructor(
    //private githubApiService: GithubApiService
  ) { }

  click($event){
   // $event.preventDefault()
    //this.githubApiService.search(this.term);
  }

  onKey($event){
  // this.term = $event.target.value;
  }


}
