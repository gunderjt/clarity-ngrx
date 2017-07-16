import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Person, EmailAddress } from "../../../shared/sdk/models";
import { Form, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormArray } from '@angular/forms';

@Component({
	selector: 'person-form',
	templateUrl: './person-form.component.html',
	styleUrls: ['./person-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent implements OnInit {
	@Input() person: Person;
	@Input() title: string = "New Person";
	@Input() btnTxt: string = "Create";
	@Input() loading: boolean = false;
	@Output() save = new EventEmitter();
	@Output() cancel = new EventEmitter();
	public personForm: FormGroup;
	public opened: boolean = true;
	
	constructor(
		private fb: FormBuilder,
	) { }

	ngOnInit() {
		this.initForm();
	}

	initForm():void {
		this.personForm = this.fb.group({
			firstName: [(this.person.firstName ||''), Validators.required],
			middleName: [(this.person.middleName ||'')],
			lastName: [(this.person.lastName ||''), Validators.required],
		});
	}

	onSubmit(){
		if (this.personForm.valid) {
			this.save.emit(this.personForm.value);
			this.personForm.reset();
			this.initForm();
		}
	}
}
