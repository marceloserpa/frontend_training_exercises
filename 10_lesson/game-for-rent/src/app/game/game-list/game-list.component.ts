import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games;

  constructor(private gameService : GameService) { }

  ngOnInit() {
    this.games = this.gameService.games;
  }

}
