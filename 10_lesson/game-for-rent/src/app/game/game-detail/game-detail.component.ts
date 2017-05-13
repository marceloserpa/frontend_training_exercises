import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game;

  constructor(private gameService :GameService) { }

  ngOnInit() {
    this.gameService.gameDetail.subscribe(game => {
      this.game = game;
    })
  }

  

}
