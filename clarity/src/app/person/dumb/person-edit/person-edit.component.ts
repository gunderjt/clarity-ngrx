import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../../shared/sdk/models";

@Component({
  selector: 'person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
	@Input() person: Person;
	opened: boolean = false;

  constructor() { }

  openModel() {
  	this.opened = true;
  }

  closeModel() {
  	this.opened = false;
  }
  
  ngOnInit() {
  }

  onSubmit() {

  }

}
