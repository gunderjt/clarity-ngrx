import { Store } from '@ngrx/store';
import { Person, LoopBackFilter } from '../../shared/sdk/models';
import { AppState } from '../store.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { getPeople, getSelectedPerson } from '../selectors/person.selectors'

import { PersonActions } from '../actions/person.actions';

@Injectable()
export class PersonStoreService {

  people$: Observable<Person[]>;
  person$: Observable<Person>;

  constructor(
    private store: Store<AppState>,
    private actions: PersonActions,
  ) {
    this.people$ = store.select(getPeople) as Observable<Person[]>;
    this.person$ = store.select(getSelectedPerson) as Observable<Person>;
    store.dispatch(this.actions.getAllPeople());
  }

  getPeople(filter: LoopBackFilter) {
  	this.store.dispatch(
  		this.actions.getAllPeople(filter)
  	);
  }

  getPerson(id: string) {
  	this.store.dispatch(
  		this.actions.getPerson(id)
  	)
  }

  createPerson(person: Person) {
    this.store.dispatch(
      this.actions.createPerson(person)
    );
  }

  updatePerson(id: string, updates: any) {
    this.store.dispatch(
      this.actions.updatePerson(id, updates)
    );
  }

  removePerson(person: Person) {
    this.store.dispatch(
      this.actions.removePerson(person.id)
    );
  }
}
