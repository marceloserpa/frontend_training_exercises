import { Component, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent  {

  constructor(private personService :PersonService){ }

  addPerson(color, name){
    this.personService.addPerson({
      color: color, 
      name:name.value
    });
  }

}
