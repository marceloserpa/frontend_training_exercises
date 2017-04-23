import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { YoutubeSearchService } from '../shared/youtube-search.service';
import { YoutubePlayerStateService } from '../shared/youtube-player-state.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent {

  private _listInSource = new BehaviorSubject<any[]>([]);
  private videos: Observable<any[]> = this._listInSource.asObservable();

  constructor(
    private youtubeSearchService : YoutubeSearchService,
    private youtubePlayerStateService: YoutubePlayerStateService
  ) {
    this.youtubeSearchService.videos
      .subscribe(data => {
        console.log("ListVideosComponent subcribe")                                
        this._listInSource.next(data.map(element => {
          let snippet = element.snippet;
          return {
            id: element.id.videoId,
            title: snippet.title,
            channelTitle: snippet.channelTitle,
            publishedAt: snippet.publishedAt,
            thumbnailSrc: snippet.thumbnails.default.url
          };
        }));
      });
  }

  selectVideo(videoId: string) {
    this.youtubePlayerStateService.defineCurrentVideoId(videoId);
  }


}
