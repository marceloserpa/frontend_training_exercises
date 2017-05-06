import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  detailPerson;

  constructor(private personService :PersonService){ }

  ngOnInit(){
    this.personService.selectedPerson.subscribe(person => {
      this.detailPerson = person;
    })
  }

  selectPerson(person){
    this.detailPerson = {
      color: person.color, 
      name: person.name
    }
  }
}
