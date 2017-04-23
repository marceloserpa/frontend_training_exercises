import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { YoutubePlayerStateService } from '../shared/youtube-player-state.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent implements OnInit {

  public videoUrl: SafeResourceUrl;
  private currentVideo: string;

  constructor(
    private youtubePlayerStateService: YoutubePlayerStateService,
    private sanitizer: DomSanitizer    
  ) { }

  play(){
    this.youtubePlayerStateService.currentVideoId.subscribe(videoId => {
      this.currentVideo = videoId;
      this.videoUrl = this.buildSafeVideoUrl(this.currentVideo);
    })
  }

  ngOnInit() {
    this.play();
  }

  buildSafeVideoUrl(videoId: string){
    let URL = ('https://www.youtube.com/embed/'+videoId+'?enablejsapi=1');
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL);
  }

}
