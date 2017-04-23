import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs'


export class GithubApiService {

  private _repositoryList = new BehaviorSubject<any[]>([]);
  private repositoryList: Observable<any[]> = this._repositoryList.asObservable();

  constructor(@Inject(Http)  private http: Http) {

  }

  search(username: string){
    let url = `https://api.github.com/users/${username}/repos`;
    this.http.get(url).map(response => response.json()).subscribe(data => {    
      console.log(data)    
      this._repositoryList.next(data);
    });
  }

  listRepositories(){
    return this.repositoryList;
  }

}
