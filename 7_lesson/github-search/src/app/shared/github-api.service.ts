import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export class GithubApiService {

  private _repositoryList = new BehaviorSubject<any[]>([]);
  private repositoryList: Observable<any[]> = this._repositoryList.asObservable();

  constructor(@Inject(Http) private http: Http) {

  }

  search(username: string){
    let url = `https://api.github.com/users/${username}/repos`;
    console.log(url);
    this.http.get(url).map(response => response.json()).subscribe(data => {  
      let repoData = data.map(repo => {
        return {
          "name": repo.name,
          "description": repo.description,
          "stars": repo.stargazers_count,
          "language": repo.language,
          "url": repo.html_url
        }
      })
      console.log(repoData)  
      this._repositoryList.next(repoData);
    });
  }

  listRepositories(){
    return this.repositoryList;
  }

}
