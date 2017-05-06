import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-card',
  templateUrl: './even-card.component.html',
  styleUrls: ['./even-card.component.css']
})
export class EvenCardComponent {

  @Input() value :number;

}
