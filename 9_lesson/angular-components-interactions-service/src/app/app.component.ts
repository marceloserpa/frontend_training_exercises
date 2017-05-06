import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persons = [];
  detailPerson;

  addPerson(person){
    this.persons.push(person);
  }

  selectPerson(person){
    this.detailPerson = {
      color: person.color, 
      name: person.name
    }
  }
}
