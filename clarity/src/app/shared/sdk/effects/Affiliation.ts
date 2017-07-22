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

import { AffiliationActionTypes, AffiliationActions } from '../actions/Affiliation';
import { LoopbackErrorActions } from '../actions/error';
import { AffiliationApi } from '../services/index';

@Injectable()
export class AffiliationEffects extends BaseLoopbackEffects {
  @Effect()
  protected findByIdPeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.FIND_BY_ID_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.findByIdPeople(action.payload.id, action.payload.fk)
        .map((response) => new AffiliationActions.findByIdPeopleSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.findByIdPeopleFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdPeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.DESTROY_BY_ID_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.destroyByIdPeople(action.payload.id, action.payload.fk)
        .map((response) => new AffiliationActions.destroyByIdPeopleSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.destroyByIdPeopleFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdPeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.UPDATE_BY_ID_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.updateByIdPeople(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new AffiliationActions.updateByIdPeopleSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.updateByIdPeopleFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getPeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.GET_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.getPeople(action.payload.id, action.payload.filter)
        .map((response) => new AffiliationActions.getPeopleSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.getPeopleFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createPeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.CREATE_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.createPeople(action.payload.id, action.payload.data)
        .map((response) => new AffiliationActions.createPeopleSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.createPeopleFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deletePeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.DELETE_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.deletePeople(action.payload.id)
        .map((response) => new AffiliationActions.deletePeopleSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.deletePeopleFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyPeople: Observable<LoopbackAction> = this.actions$
    .ofType(AffiliationActionTypes.CREATE_MANY_PEOPLE)
    .mergeMap((action: LoopbackAction) =>
      this.affiliation.createManyPeople(action.payload.id, action.payload.data)
        .map((response) => new AffiliationActions.createManyPeopleSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new AffiliationActions.createManyPeopleFail(error, action.meta)),
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
    @Inject(AffiliationApi) public affiliation: AffiliationApi
  ) {
    super(actions$, affiliation, 'Affiliation', AffiliationActionTypes, AffiliationActions);
  }
}
