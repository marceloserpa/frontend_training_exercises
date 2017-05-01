import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{

  @Output() numberGenerated = new EventEmitter<any>();

  private INTERVAL: number = 500;
  private intervalID;

  start(){
    console.log("start game")
    this.intervalID = setInterval(() => {
      let number = this.generateNumbers(0, 100);
      let type = this.verifyType(number); 
      this.numberGenerated.emit({
        value: number,
        type: type
      });
    }, this.INTERVAL);    
  }

  stop(){
    console.log("stop game")
    clearInterval(this.intervalID);
  }

  generateNumbers(min :number, max :number){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  verifyType(number){
    return number % 2 == 0 ? 'even' : 'odd';
  }

}
