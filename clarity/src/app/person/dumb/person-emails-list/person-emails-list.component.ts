import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { EmailAddress } from "../../../shared/sdk/models";

@Component({
  selector: 'person-emails-list',
  templateUrl: './person-emails-list.component.html',
  styleUrls: ['./person-emails-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonEmailsListComponent implements OnInit {
	@Input() emails: EmailAddress[];
	@Output() add = new EventEmitter();
	@Output() remove = new EventEmitter();
	@Output() update = new EventEmitter();
	@Output() refresh = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
