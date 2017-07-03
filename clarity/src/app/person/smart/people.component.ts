import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AppState } from '../../store/store.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { getPeople } from '../../store/selectors/person.selectors';
import { Person, LoopBackFilter } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';
import { PersonStoreService } from '../../store/services/person-store.service';

@Component({
	selector: 'app-people',
	template: `
		<person-search
			(filter)=searchFilter($event)
		>
		</person-search>

		<person-list 
		[people]="people$ | async"
		(selectPerson)="redirectToPerson($event)"
		(create)="redirectToCreate()"
		></person-list>
	`
})
export class PeopleComponent implements OnInit {
	people$: Observable<Person[]>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private personStore: PersonStoreService
		) 
	{
		this.people$ = this.personStore.people$;
	}
	ngOnInit() {
	}

	searchFilter(filter: LoopBackFilter) {
		this.personStore.getPeople(filter);
	}

	redirectToPerson(person) {
		this.router.navigate([person.id], {relativeTo: this.route});
	}

	redirectToCreate() {
		this.router.navigate([{ outlets: {modal: ['people','new'] } }]);
	}
}
