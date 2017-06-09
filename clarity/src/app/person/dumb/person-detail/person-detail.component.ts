import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from "../../../shared/sdk/models";
import { Location } from '@angular/common';

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
	@Input() person: Person;
	@Output() goEdit = new EventEmitter();

  constructor(
  	private location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
  	this.location.back();
  }
}
