import { Component } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  private INTERVAL: number = 500;
  private intervalID;

  constructor(private gameService :GameService){ }

  start(){
    console.log("start game")
    this.intervalID = setInterval(() => {
      let number = this.generateNumbers(0, 100);
      let type = this.verifyType(number); 
      let numberGenerated = {
        value: number,
        type: type
      };
      this.gameService.addNumber(numberGenerated);
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
