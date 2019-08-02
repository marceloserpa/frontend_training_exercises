import { Component, OnInit } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public currentAnswer = '';
  public instruction = 'Traduza a frase::';

  private round = 0;

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

  validateAnswer(){
    if(this.currentAnswer === this.currentQuestion.portuguese){
      this.round++;
      this.currentAnswer = '';
      console.log("fui clicado")
    } else {
      console.log("Errour")
    }

  }

}
