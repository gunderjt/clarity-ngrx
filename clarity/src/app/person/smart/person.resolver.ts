import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppState } from '../../store/store.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { PersonActions } from '../../store/actions/person.actions';
import { PersonStoreService } from '../../store/services/person-store.service';

@Injectable()
export class PersonResolver implements Resolve<Action> {
  constructor (
    private action$: Actions,
    private actions: PersonActions,
    private personStore: PersonStoreService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action> {
    let _id = route.params['id'];

    this.personStore.getPerson(_id);
    return this.action$.ofType(PersonActions.GET_PERSON_SUCCESS)
      .take(1);
  }
}