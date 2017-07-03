import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Person } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';
import { PersonFormComponent } from '../dumb/person-form/person-form.component';
import { getSelectedPerson } from '../../store/selectors/person.selectors';
import { AppState } from '../../store/store.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonStoreService } from '../../store/services/person-store.service';

@Component({
	selector: 'app-person-new',
	template: `
		<clr-modal [clrModalSize]="'lg'" [(clrModalOpen)]="opened" [clrModalClosable]="false">
			<h3 class="modal-title">New Person</h3>
			<div class="modal-body">
    		<person-form 
					[person]="person"
					(save)=onSave($event)
					(cancel)=onCancel()
					>
				</person-form>
  		</div>
  		<div class="modal-footer">
	  		<button 
	  			type="button" 
	  			class="btn btn-outline"
			    (click)="onCancel()">
			    Cancel
			    </button>
	    	<button type="button" class="btn btn-primary" (click)="onSubmit()">Create</button>
	    </div>
		</clr-modal>
	`,
})
export class PersonNewComponent implements OnInit, OnDestroy {
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	@ViewChild(PersonFormComponent) form: PersonFormComponent;
	private opened: boolean = true;
	person: Person = new Person();

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private personStore: PersonStoreService,
	) {
	 }

	ngOnInit() {
	}

	onSave(personForm) {
		this.personStore.person$
		.takeUntil(this.ngUnsubscribe)
		.subscribe(
			(person) => this.router.navigate([{outlets: {modal: null, primary: ['people', person.id]}}])
		);
		this.personStore.createPerson(personForm as Person);
	}

	onSubmit() {
		this.form.onSubmit();
	}

	onCancel() {
		this.router.navigate([{outlets: {modal: null}}])
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
