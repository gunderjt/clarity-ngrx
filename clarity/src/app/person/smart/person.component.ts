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
		<person-detail 
			[person]="person$ | async"
			(edit)="openEdit($event)"
			(back)="goBack()"
			(delete)="removePerson($event)"
		>
		</person-detail>
		<person-emails
			[person$] = "person$"
		>
		</person-emails>
	`,
})
export class PersonComponent implements OnInit, OnDestroy {
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	person$: Observable<Person>;

	//I'm not sure how to do it better :/
	redirect: boolean = false;

	constructor(
		private personStore: PersonStoreService,
		private route: ActivatedRoute,
		private router: Router,
	) { 
	 }

	ngOnInit() {
		this.person$ = this.personStore.person$;
		this.person$
		.takeUntil(this.ngUnsubscribe)
		.subscribe((person) => {
			if(this.redirect && !person.id) {
				this.router.navigate(['/people']);		
			}
		});
	}

	removePerson(person) {
		this.redirect = true;
		this.personStore.removePerson(person as Person);
	}

	openEdit(person) {
		this.router.navigate([{outlets: {modal: ['people', person.id, 'edit']}}]);
	}

	goBack() {
		this.router.navigate(['/people']);
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
