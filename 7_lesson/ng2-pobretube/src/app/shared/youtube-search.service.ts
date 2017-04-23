import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


export class YoutubeSearchService{  

  YOUTUBE_API_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
  YOUTUBE_API_KEY = "AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U";

  private videosInSource = new BehaviorSubject<any[]>([]);
  private _videos: Observable<any[]> = this.videosInSource.asObservable();

  constructor (@Inject(Http)  private http: Http) { }

  get videos(){
    return this._videos;
  }

  search(q){
    let url = this.urlBuilder(q)
    console.log(url)
    this.http.get(url).map(response => response.json()).subscribe(data => {        
       this.videosInSource.next(data.items);
    });
  }

  urlBuilder(term){
    return `${this.YOUTUBE_API_SEARCH_URL}?part=snippet&key=${this.YOUTUBE_API_KEY}&q=${encodeURIComponent(term)}&type=video`;
  }
  

}