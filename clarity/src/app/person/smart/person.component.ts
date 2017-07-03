import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Person, EmailAddress } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';
import { getSelectedPerson } from '../../store/selectors/person.selectors';
import { AppState } from '../../store/store.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonStoreService } from '../../store/services/person-store.service';

@Component({
	selector: 'app-person',
	template: `
		<div class="row">
			<div class="col-xs">
				<person-detail 
					[person]="person$ | async"
					(edit)="openEdit($event)"
					(back)="goBack()"
					(delete)="removePerson($event)"
				>
				</person-detail>
			</div>
		</div>
	`,
})
export class PersonComponent implements OnInit, OnDestroy {
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	person$: Observable<Person>;

	constructor(
		private personStore: PersonStoreService,
		private route: ActivatedRoute,
		private router: Router,
	) { 
	 }

	ngOnInit() {
		this.person$ = this.personStore.person$;
	}


	removePerson(person) {
		this.personStore.removePerson(person as Person);
	}

	openEdit(person) {
		this.router.navigate([{outlets: {modal: ['people', person.id, 'edit']}}]);
		//this.router.navigate(['/people', person.id, 'edit']);
	}

	goBack() {
		this.router.navigate(['/people']);
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

}
