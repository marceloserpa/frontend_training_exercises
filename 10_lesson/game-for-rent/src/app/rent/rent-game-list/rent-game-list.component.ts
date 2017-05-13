import { Component, OnInit } from '@angular/core';

import { RentGameService } from '../rent-game.service';

@Component({
  selector: 'app-rent-game-list',
  templateUrl: './rent-game-list.component.html',
  styleUrls: ['./rent-game-list.component.css']
})
export class RentGameListComponent implements OnInit {

  rentedGames = [];

  constructor(private rentGameService : RentGameService) { }

  ngOnInit() {
    this.rentedGames = this.rentGameService.rentedGames;
  }

}
