import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Person, EmailAddress } from "../../../shared/sdk/models";
import { Form, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormArray } from '@angular/forms';
import { NotifyService } from '../../../shared/UINotify/ui-notify.service';

@Component({
	selector: 'person-form',
	templateUrl: './person-form.component.html',
	styleUrls: ['./person-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent implements OnInit, OnChanges {
	@Input() person: Person;
	@Output() save = new EventEmitter();
	@Output() cancel = new EventEmitter();
	public personForm: FormGroup;
	public submitLoader = false;
	
	constructor(
		private fb: FormBuilder,
		private notify: NotifyService,
	) { }

	ngOnInit() {
		this.initForm();
	}

	ngOnChanges(args: any) {
		this.initForm();
	}

	initForm():void {
		this.personForm = this.fb.group({
			firstName: [(this.person.firstName ||''), Validators.required],
			middleName: [(this.person.middleName ||'')],
			lastName: [(this.person.lastName ||''), Validators.required],
		});
	}

	// initEmail(email: EmailAddress = new EmailAddress()) {
	// 	return this.fb.group({
	// 		value: [email.value, Validators.required],
	// 		label: [email.label]
	// 	})
	// }

	// addEmail(email?: EmailAddress) {
	// 	const control = <FormArray>this.personForm.controls['emails'];
	// 	const emailCtrl = this.initEmail(email);

	// 	control.push(emailCtrl);
	// }

	// removeEmail(i: number) {
	// 	const control = <FormArray>this.personForm.controls['emails'];
	// 	control.removeAt(i);
	// }


	onSubmit(){
		if (this.personForm.valid) {
			this.submitLoader = true;
			this.save.emit(this.personForm.value);
		}
	}

	//called by parent when submission completed
	onSubmitComplete() {
		this.submitLoader = false;
		this.personForm.reset();
	}
}
