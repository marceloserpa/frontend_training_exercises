import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonService {

  private persons = [];
  public selectedPerson = new EventEmitter<any>()

  constructor() { }

  getPersons(){
    return this.persons;
  }

  addPerson(person){
    console.log(person)
    this.persons.push(person);
  }

}
