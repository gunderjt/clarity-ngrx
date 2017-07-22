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

import { PageAuthorsActionTypes, PageAuthorsActions } from '../actions/PageAuthors';
import { LoopbackErrorActions } from '../actions/error';
import { PageAuthorsApi } from '../services/index';

@Injectable()
export class PageAuthorsEffects extends BaseLoopbackEffects {
  @Effect()
  protected getPage: Observable<LoopbackAction> = this.actions$
    .ofType(PageAuthorsActionTypes.GET_PAGE)
    .mergeMap((action: LoopbackAction) =>
      this.pageauthors.getPage(action.payload.id, action.payload.refresh)
        .map((response) => new PageAuthorsActions.getPageSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageAuthorsActions.getPageFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getAuthor: Observable<LoopbackAction> = this.actions$
    .ofType(PageAuthorsActionTypes.GET_AUTHOR)
    .mergeMap((action: LoopbackAction) =>
      this.pageauthors.getAuthor(action.payload.id, action.payload.refresh)
        .map((response) => new PageAuthorsActions.getAuthorSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PageAuthorsActions.getAuthorFail(error, action.meta)),
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
    @Inject(PageAuthorsApi) public pageauthors: PageAuthorsApi
  ) {
    super(actions$, pageauthors, 'PageAuthors', PageAuthorsActionTypes, PageAuthorsActions);
  }
}
