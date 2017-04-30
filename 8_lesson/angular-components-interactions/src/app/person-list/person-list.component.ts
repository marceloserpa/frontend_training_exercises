import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  @Input() persons = [];

  @Output() detailPerson = new EventEmitter<any>();

  select(person){
    console.log(person)
    this.detailPerson.emit(person);
  }

}
