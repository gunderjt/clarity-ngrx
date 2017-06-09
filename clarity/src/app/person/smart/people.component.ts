import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AppState } from '../../store/store.interface';
import { Router } from '@angular/router';
import { getPeople } from '../../store/selectors/person.selectors';
import { Person } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';

@Component({
	selector: 'app-people',
	template: `
		<person-list 
		[people]="people$ | async"
		(selectPerson)="redirectToPerson($event)"
		></person-list>
	`
})
export class PeopleComponent implements OnInit {
	people$: Observable<Person[]>;

	constructor(
		private store: Store<AppState>,
		private router: Router,
		private actions: PersonActions,
		) 
	{
		this.store.dispatch(this.actions.getAllPeople());
		this.people$ = this.store.select(getPeople);
	}
	ngOnInit() {
	}

	redirectToPerson(person){
		this.router.navigate(['/people', person.id]);
	}
}
