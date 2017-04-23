import { Component } from '@angular/core';
import { YoutubeSearchService } from '../shared/youtube-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

  term = '';  

  constructor(private youtubeSearchService: YoutubeSearchService) {

  }

  clicked($event) {
    $event.preventDefault();
    this.youtubeSearchService.search(this.term);    
  }

  onKey($event){
    this.term = $event.target.value;
  }

}