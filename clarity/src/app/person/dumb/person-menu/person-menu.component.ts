import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Person } from "../../../shared/sdk/models";
@Component({
  selector: 'person-menu',
  templateUrl: './person-menu.component.html',
  styleUrls: ['./person-menu.component.scss'],
 	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonMenuComponent implements OnInit {
	@Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
