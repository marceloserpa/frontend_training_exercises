import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GameService } from '../game.service';
import { RentGameService } from '../../rent/rent-game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game;

  constructor(    
    private router: Router, 
    private route: ActivatedRoute,
    private gameService :GameService, 
    private rentGameService :RentGameService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.game = this.gameService.getGame(+params['id']);
    })
  }

  rentThisGame(id: number){
    this.rentGameService.rent(id);
  }

}
