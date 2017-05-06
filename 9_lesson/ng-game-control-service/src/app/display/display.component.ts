import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  numbers: any;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.numbers = this.gameService.numbers;
  }

}
