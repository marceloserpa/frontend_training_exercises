import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-card',
  templateUrl: './odd-card.component.html',
  styleUrls: ['./odd-card.component.css']
})
export class OddCardComponent{

  @Input() value :number;

}
