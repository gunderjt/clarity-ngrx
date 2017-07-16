import { Store } from '@ngrx/store';
import { Person, LoopBackFilter } from '../../shared/sdk/models';
import { AppState } from '../store.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { getPeople, getSelectedPerson, getSelectedPersonId, getLoaded, getLoading } from '../selectors/person.selectors'

import { PersonActions } from '../actions/person.actions';
import { BaseStoreService } from './base-store.service';

@Injectable()
export class PersonStoreService extends BaseStoreService {

  personId: string;

  people$: Observable<Person[]>;
  person$: Observable<Person>;
  personId$: Observable<string>;
  //state
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(
    protected store: Store<AppState>,
    protected actions: PersonActions,
  ) {
    super(store);
    this.model$ = store.select(getSelectedPerson) as Observable<Person>;
    this.people$ = store.select(getPeople) as Observable<Person[]>;
    this.person$ = store.select(getSelectedPerson) as Observable<Person>;
    this.personId$ = store.select(getSelectedPersonId) as Observable<string>;
    this.loaded$ = store.select(getLoaded) as Observable<boolean>;
    this.loading$ = store.select(getLoading) as Observable<boolean>;
  }

  getPeople(filter?: LoopBackFilter) {
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
      this.actions.removePerson(person)
    );
  }

  newModel() {
    return new Person();
  }
}
