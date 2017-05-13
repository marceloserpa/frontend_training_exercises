import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GameService {

  games = [
    { 
      id: 1,
      title: "Shadow of Modor", 
      description: "An open world action-role playing video game developed by Monolith Productions and published by Warner Bros. Interactive ...", 
      thumbnail: "http://0.media.dorkly.cvcdn.com/28/39/e413a84da8e1b6738f22dc579963c2bd-middle-earth-shadow-of-mordor.jpg" 
    },
    { 
      id: 2,
      title: "Street fighter V", 
      description: "A fighting video game developed by Capcom and Dimps. It is the sixth main numbered entry in the Street Fighter series. The game was ..", 
      thumbnail: "http://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg" 
    }    
  ];


  constructor() { }

  getGame(id: number){
    return this.games.filter(game => game.id === id)[0]
  }

  create(game){
    this.games.push(game);
  }

}
