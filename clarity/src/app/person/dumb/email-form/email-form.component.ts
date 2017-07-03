import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
	moduleId: module.id,
  selector: 'email-form',
  template: `
  	<div [formGroup]="emailForm">
	    <div class="form-group col-xs-6">
	        <label>Email</label>
	        <input type="text" class="form-control" formControlName="value">
	        <small [hidden]="emailForm.controls.value.valid" class="text-danger">
	            Email is Required
	        </small>
	    </div>
	</div>
  `,
})
export class EmailFormComponent implements OnInit {
	@Input('group') emailForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
