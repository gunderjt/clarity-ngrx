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

import { PageActionTypes, PageActions } from '../actions/Page';
import { LoopbackErrorActions } from '../actions/error';
import { PageApi } from '../services/index';

@Injectable()
export class PageEffects extends BaseLoopbackEffects {
  @Effect()
  protected findByIdAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.FIND_BY_ID_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.findByIdAuthors(action.payload.id, action.payload.fk)
        .map((response) => new PageActions.findByIdAuthorsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageActions.findByIdAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.DESTROY_BY_ID_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.destroyByIdAuthors(action.payload.id, action.payload.fk)
        .map((response) => new PageActions.destroyByIdAuthorsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PageActions.destroyByIdAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.UPDATE_BY_ID_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.updateByIdAuthors(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PageActions.updateByIdAuthorsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageActions.updateByIdAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected linkAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.LINK_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.linkAuthors(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PageActions.linkAuthorsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageActions.linkAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected unlinkAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.UNLINK_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.unlinkAuthors(action.payload.id, action.payload.fk)
        .map((response) => new PageActions.unlinkAuthorsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PageActions.unlinkAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.GET_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.getAuthors(action.payload.id, action.payload.filter)
        .map((response) => new PageActions.getAuthorsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageActions.getAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.CREATE_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.createAuthors(action.payload.id, action.payload.data)
        .map((response) => new PageActions.createAuthorsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageActions.createAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.DELETE_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.deleteAuthors(action.payload.id)
        .map((response) => new PageActions.deleteAuthorsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new PageActions.deleteAuthorsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyAuthors: Observable<LoopbackAction> = this.actions$
    .ofType(PageActionTypes.CREATE_MANY_AUTHORS)
    .mergeMap((action: LoopbackAction) =>
      this.page.createManyAuthors(action.payload.id, action.payload.data)
        .map((response) => new PageActions.createManyAuthorsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageActions.createManyAuthorsFail(error, action.meta)),
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
    @Inject(PageApi) public page: PageApi
  ) {
    super(actions$, page, 'Page', PageActionTypes, PageActions);
  }
}
