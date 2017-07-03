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
	selector: 'app-person-edit',
	template: `
		<clr-modal [clrModalSize]="'lg'" [(clrModalOpen)]="opened" [clrModalClosable]="false">
			<h3 class="modal-title">{{(person$| async).firstName}} Edit</h3>
			<div class="modal-body">
				<person-form 
					[person]="person$ | async"
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
	    	<button type="button" class="btn btn-primary" (click)="onSubmit()">Update</button>
	    </div>
		</clr-modal>
	`,
})
export class PersonEditComponent implements OnInit, OnDestroy {
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	@ViewChild(PersonFormComponent) form: PersonFormComponent;
	person$: Observable<Person>;
	private opened: boolean = true;
	private id: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private personStore: PersonStoreService,
	) {}

	ngOnInit() {
		this.person$ = this.personStore.person$;
		this.person$
		.takeUntil(this.ngUnsubscribe)
		.subscribe((person) => this.id = person.id);
	}

	onSubmit() {
		this.form.onSubmit();
	}

	onSave(personForm) {
		this.personStore.updatePerson(this.id, personForm);
		this.router.navigate([{outlets: {modal: null}}]);
	}

	onCancel() {
		this.router.navigate([{outlets: {modal: null}}]);
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
