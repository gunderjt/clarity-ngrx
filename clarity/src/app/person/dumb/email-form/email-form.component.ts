import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Person, EmailAddress } from "../../../shared/sdk/models";
import { Form, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormArray } from '@angular/forms';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailFormComponent implements OnInit {
	@Input() email: EmailAddress;
	@Input() loading: boolean = false;
	@Input() title: string;
	@Input() btnTxt: string;
	@Output() save= new EventEmitter();
	@Output() cancel= new EventEmitter();
	public emailForm: FormGroup;
	public opened: boolean = true;

  constructor(
  	private fb: FormBuilder,
  ) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm():void {
  	this.emailForm = this.fb.group({
  		value: [(this.email.value || ''), Validators.required],
  		public: [(this.email.public || false)],
  		workshop: [(this.email.workshop || true)],
  		// label: [(this.email.label || 'Main'), Validators.required],
  		// type: [(this.email.type || 'Type'), Validators.required],
  	})
  }

  onSubmit() {
    if(this.emailForm.valid) {
      this.save.emit(this.emailForm.value);
      this.emailForm.reset();
      this.initForm();
    }
  }
}
