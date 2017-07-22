/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';

import { PhoneNumberActionTypes, PhoneNumberActions } from '../actions/PhoneNumber';
import { LoopbackErrorActions } from '../actions/error';
import { PhoneNumberApi } from '../services/index';

@Injectable()
export class PhoneNumberEffects extends BaseLoopbackEffects {
  @Effect()
  protected getPerson: Observable<LoopbackAction> = this.actions$
    .ofType(PhoneNumberActionTypes.GET_PERSON)
    .mergeMap((action: LoopbackAction) =>
      this.phonenumber.getPerson(action.payload.id, action.payload.refresh)
        .map((response) => new PhoneNumberActions.getPersonSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PhoneNumberActions.getPersonFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() protected create;
  @Effect() protected createMany;
  @Effect() protected findById;
  @Effect() protected find;
  @Effect() protected findOne;
  @Effect() protected updateAll;
  @Effect() protected deleteById;
  @Effect() protected updateAttributes;
  @Effect() protected upsert;
  @Effect() protected upsertWithWhere;
  @Effect() protected replaceOrCreate;
  @Effect() protected replaceById;
  @Effect() protected patchOrCreate;
  @Effect() protected patchAttributes;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(PhoneNumberApi) public phonenumber: PhoneNumberApi
  ) {
    super(actions$, phonenumber, 'PhoneNumber', PhoneNumberActionTypes, PhoneNumberActions);
  }
}
