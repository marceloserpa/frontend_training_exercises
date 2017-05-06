import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent  {

  @Output() createdPerson = new EventEmitter<any>();

  addPerson(color, name){
    this.createdPerson.emit({
      color: color, 
      name:name.value
    });
  }

}
