import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game-create-form',
  templateUrl: './game-create-form.component.html',
  styleUrls: ['./game-create-form.component.css']
})
export class GameCreateFormComponent implements OnInit {


  constructor(private gameService :GameService) { }

  ngOnInit() {
  }

  onSubmit(value){    
    this.gameService.create(value);
  }
}
