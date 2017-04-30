import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persons = [];
  detailPerson;

  addPerson(color: string, name){
    this.persons.push({
      color: color, 
      name: name.value
    })
  }

  selectPerson(person){
    this.detailPerson = {
      color: person.color, 
      name: person.name
    }
  }
}
