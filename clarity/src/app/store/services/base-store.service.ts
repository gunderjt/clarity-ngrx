import { Store } from '@ngrx/store';
import { Person, LoopBackFilter } from '../../shared/sdk/models';
import { AppState } from '../store.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { getPeople, getSelectedPerson, getSelectedPersonId, getLoaded, getLoading } from '../selectors/person.selectors'

import { PersonActions } from '../actions/person.actions';

@Injectable()
export abstract class BaseStoreService {

	public model$: Observable<any>;

	public loading$: Observable<boolean>;
	public loaded$: Observable<boolean>;

	abstract newModel();

	constructor(
		protected store: Store<AppState>,
	){
	}
}