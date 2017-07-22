/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, PageAuthors } from '../models';

export const PageAuthorsActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('PageAuthors'), {
  GET_PAGE: type('[PageAuthors] getPage'),
  GET_PAGE_SUCCESS: type('[PageAuthors] getPage success'),
  GET_PAGE_FAIL: type('[PageAuthors] getPage fail'),

  GET_AUTHOR: type('[PageAuthors] getAuthor'),
  GET_AUTHOR_SUCCESS: type('[PageAuthors] getAuthor success'),
  GET_AUTHOR_FAIL: type('[PageAuthors] getAuthor fail'),

});
export const PageAuthorsActions =
Object.assign(BaseLoopbackActionsFactory<PageAuthors>('PageAuthors', PageAuthorsActionTypes), {

  /**
   * getPage Action.
   * Fetches belongsTo relation page.
   *
   * @param {any} id PageAuthors id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getPage: class implements Action {
    public readonly type = PageAuthorsActionTypes.GET_PAGE;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getPageSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getPageSuccess: class implements Action {
    public readonly type = PageAuthorsActionTypes.GET_PAGE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPageFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPageFail: class implements Action {
    public readonly type = PageAuthorsActionTypes.GET_PAGE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getAuthor Action.
   * Fetches belongsTo relation author.
   *
   * @param {any} id PageAuthors id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getAuthor: class implements Action {
    public readonly type = PageAuthorsActionTypes.GET_AUTHOR;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getAuthorSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getAuthorSuccess: class implements Action {
    public readonly type = PageAuthorsActionTypes.GET_AUTHOR_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAuthorFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAuthorFail: class implements Action {
    public readonly type = PageAuthorsActionTypes.GET_AUTHOR_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});