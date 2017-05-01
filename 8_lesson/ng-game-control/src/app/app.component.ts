import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers: any = [];

  addNumber(n: number) {
    console.log(n)
    this.numbers.push(n);
  }

}
