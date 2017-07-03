import { Component, OnInit, Input } from '@angular/core';
import { EmailAddress } from "../../../shared/sdk/models";

@Component({
  selector: 'person-emails',
  template: `
  	<ul>
  		<li *ngFor="let email of emails">
  			{{email.value}}
  		</li>
  	</ul>
  `,
  styleUrls: ['./person-emails.component.scss']
})
export class PersonEmailsComponent implements OnInit {
	@Input() emails: EmailAddress[];

  constructor() { }

  ngOnInit() {
  }

}
