import { Injectable } from '@angular/core';

@Injectable()
export class RentGameService {

  rentedGames = [];

  constructor() { }

  rent(id :number){
    this.rentedGames.push(id);
    console.log(this.rentedGames)
  }

}
