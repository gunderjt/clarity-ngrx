import { Store } from '@ngrx/store';
import { EmailAddress, LoopBackFilter } from '../../shared/sdk/models';
import { AppState } from '../store.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { getEmails, getLoaded, getLoading } from '../selectors/email.selectors'
import { EmailActions } from '../actions/email.actions';
import { BaseStoreService } from './base-store.service';

@Injectable()
export class EmailStoreService extends BaseStoreService {
	emails$: Observable<EmailAddress[]>;
	loaded$: Observable<boolean>;
	loading$: Observable<boolean>;

  constructor(
    protected store: Store<AppState>,
    protected actions: EmailActions,
  ) {
    super(store);
    this.model$ = store.select(getEmails) as Observable<EmailAddress[]>
  	this.emails$ = store.select(getEmails) as Observable<EmailAddress[]>
    this.loaded$ = store.select(getLoaded) as Observable<boolean>;
    this.loading$ = store.select(getLoading) as Observable<boolean>;
  }

  getPersonEmails(id: string, filter?: LoopBackFilter) {
    this.store.dispatch(
      this.actions.getPersonEmails(id, filter)
    )
  }

  addEmail(person_id: string, email:EmailAddress) {
    this.store.dispatch(
      this.actions.addEmail(person_id, email)
    )
  }

  updateEmail(id: string, email: EmailAddress) {
    this.store.dispatch(
      this.actions.updateEmail(id, email)
    )
  }

  removeEmail(email: EmailAddress) {
    this.store.dispatch(
      this.actions.removeEmail(email)
    )
  }

  newModel() {
    return new EmailAddress();
  }
}