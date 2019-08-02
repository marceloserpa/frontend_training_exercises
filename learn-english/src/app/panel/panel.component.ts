import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';
import { gameResult } from '../shared/game-result.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public currentAnswer = '';
  public instruction = 'Traduza a frase::';
  public remainingLifes = 5;

  private round = 0;  

  @Output()
  finishGame = new EventEmitter<gameResult>();

  constructor() {
  }

  ngOnInit() {
    console.log(SENTENCES_MOCK);
  }

  onUpdateAnswer(word: string){
    this.currentAnswer = word;
    console.log(this.currentAnswer);
  }

  get currentQuestion(){
    return SENTENCES_MOCK[this.round];
  }

  get progress(){
    return (this.round * 100) / SENTENCES_MOCK.length;
  }

  validateAnswer(){
    if(this.currentAnswer === this.currentQuestion.portuguese){
      this.round++;
      this.currentAnswer = '';

      if(this.round === SENTENCES_MOCK.length){
        this.finishGame.emit(gameResult.WIN);
      }


    } else {
      this.remainingLifes--;

      if(this.remainingLifes === -1){
        this.finishGame.emit(gameResult.DEFEAT);
      }
      
    }

  }

}
