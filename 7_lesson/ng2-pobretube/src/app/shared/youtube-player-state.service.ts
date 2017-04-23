import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

export class YoutubePlayerStateService {

  private currentVideoIdSubject = new BehaviorSubject<string>("");
  private _currentVideoId: Observable<string> = this.currentVideoIdSubject.asObservable();

  constructor() { }

  get currentVideoId(){
    return this._currentVideoId;
  }

  defineCurrentVideoId(videoId: string){
    console.log("define new video id")
    this.currentVideoIdSubject.next(videoId);
  }

}
