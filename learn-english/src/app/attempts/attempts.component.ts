import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Attempt } from '../shared/attempt.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  public attempts: Attempt[] = [];

  @Input()
  private remainingLifes: number;

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < this.remainingLifes; i++){
      this.attempts.push(new Attempt(true));
    }
    console.log(this.attempts);
  }

  ngOnChanges(changes: SimpleChanges){
    if(!changes.remainingLifes.firstChange){
      let index = (this.attempts.length - 1) - this.remainingLifes
      this.attempts[index].isFull = false;
      console.log(changes);
    }
  }

}
