import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{

  persons = [];

  constructor(private personService :PersonService){ }

  ngOnInit(){
    this.persons = this.personService.getPersons();
  }

  select(person){
    console.log(person)
    this.personService.selectedPerson.emit(person);
  }

}
