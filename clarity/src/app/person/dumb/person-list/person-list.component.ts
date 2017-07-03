import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Person } from "../../../shared/sdk/models";

@Component({
  selector: 'person-list',
 	changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
	@Input() people: Person[];
	@Output() selectPerson = new EventEmitter();
	@Output() create = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}

