import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent{

  @Input() name: string;
  @Input() description: string;
  @Input() stars: string;
  @Input() language: string;  
  @Input() url: string;  

}