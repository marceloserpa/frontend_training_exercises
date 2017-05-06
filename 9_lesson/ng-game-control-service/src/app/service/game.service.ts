import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  numbers: any = [];

  addNumber(n) {
    console.log(n)
    this.numbers.push(n);
  }

}
