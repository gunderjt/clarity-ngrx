/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Page } from '../models';

export const PageActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Page'), {
  FIND_BY_ID_AUTHORS: type('[Page] findByIdAuthors'),
  FIND_BY_ID_AUTHORS_SUCCESS: type('[Page] findByIdAuthors success'),
  FIND_BY_ID_AUTHORS_FAIL: type('[Page] findByIdAuthors fail'),

  DESTROY_BY_ID_AUTHORS: type('[Page] destroyByIdAuthors'),
  DESTROY_BY_ID_AUTHORS_SUCCESS: type('[Page] destroyByIdAuthors success'),
  DESTROY_BY_ID_AUTHORS_FAIL: type('[Page] destroyByIdAuthors fail'),

  UPDATE_BY_ID_AUTHORS: type('[Page] updateByIdAuthors'),
  UPDATE_BY_ID_AUTHORS_SUCCESS: type('[Page] updateByIdAuthors success'),
  UPDATE_BY_ID_AUTHORS_FAIL: type('[Page] updateByIdAuthors fail'),

  LINK_AUTHORS: type('[Page] linkAuthors'),
  LINK_AUTHORS_SUCCESS: type('[Page] linkAuthors success'),
  LINK_AUTHORS_FAIL: type('[Page] linkAuthors fail'),

  UNLINK_AUTHORS: type('[Page] unlinkAuthors'),
  UNLINK_AUTHORS_SUCCESS: type('[Page] unlinkAuthors success'),
  UNLINK_AUTHORS_FAIL: type('[Page] unlinkAuthors fail'),

  GET_AUTHORS: type('[Page] getAuthors'),
  GET_AUTHORS_SUCCESS: type('[Page] getAuthors success'),
  GET_AUTHORS_FAIL: type('[Page] getAuthors fail'),

  CREATE_AUTHORS: type('[Page] createAuthors'),
  CREATE_AUTHORS_SUCCESS: type('[Page] createAuthors success'),
  CREATE_AUTHORS_FAIL: type('[Page] createAuthors fail'),

  DELETE_AUTHORS: type('[Page] deleteAuthors'),
  DELETE_AUTHORS_SUCCESS: type('[Page] deleteAuthors success'),
  DELETE_AUTHORS_FAIL: type('[Page] deleteAuthors fail'),

  CREATE_MANY_AUTHORS: type('[Page] createManyAuthors'),
  CREATE_MANY_AUTHORS_SUCCESS: type('[Page] createManyAuthors success'),
  CREATE_MANY_AUTHORS_FAIL: type('[Page] createManyAuthors fail'),

});
export const PageActions =
Object.assign(BaseLoopbackActionsFactory<Page>('Page', PageActionTypes), {

  /**
   * findByIdAuthors Action.
   * Find a related item by id for authors.
   *
   * @param {any} id Page id
   * @param {any} fk Foreign key for authors
   * @param {any} meta (optional).
   * 
   */
  findByIdAuthors: class implements Action {
    public readonly type = PageActionTypes.FIND_BY_ID_AUTHORS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdAuthorsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.FIND_BY_ID_AUTHORS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.FIND_BY_ID_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdAuthors Action.
   * Delete a related item by id for authors.
   *
   * @param {any} id Page id
   * @param {any} fk Foreign key for authors
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAuthors: class implements Action {
    public readonly type = PageActionTypes.DESTROY_BY_ID_AUTHORS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAuthorsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.DESTROY_BY_ID_AUTHORS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.DESTROY_BY_ID_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdAuthors Action.
   * Update a related item by id for authors.
   *
   * @param {any} id Page id
   * @param {any} fk Foreign key for authors
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdAuthors: class implements Action {
    public readonly type = PageActionTypes.UPDATE_BY_ID_AUTHORS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdAuthorsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.UPDATE_BY_ID_AUTHORS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.UPDATE_BY_ID_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkAuthors Action.
   * Add a related item by id for authors.
   *
   * @param {any} id Page id
   * @param {any} fk Foreign key for authors
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkAuthors: class implements Action {
    public readonly type = PageActionTypes.LINK_AUTHORS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkAuthorsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.LINK_AUTHORS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.LINK_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkAuthors Action.
   * Remove the authors relation to an item by id.
   *
   * @param {any} id Page id
   * @param {any} fk Foreign key for authors
   * @param {any} meta (optional).
   * 
   */
  unlinkAuthors: class implements Action {
    public readonly type = PageActionTypes.UNLINK_AUTHORS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkAuthorsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.UNLINK_AUTHORS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.UNLINK_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getAuthors Action.
   * Queries authors of Page.
   *
   * @param {any} id Page id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getAuthors: class implements Action {
    public readonly type = PageActionTypes.GET_AUTHORS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getAuthorsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.GET_AUTHORS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.GET_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createAuthors Action.
   * Creates a new instance in authors of this model.
   *
   * @param {any} id Page id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createAuthors: class implements Action {
    public readonly type = PageActionTypes.CREATE_AUTHORS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAuthorsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.CREATE_AUTHORS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.CREATE_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteAuthors Action.
   * Deletes all authors of this model.
   *
   * @param {any} id Page id
   * @param {any} meta (optional).
   * 
   */
  deleteAuthors: class implements Action {
    public readonly type = PageActionTypes.DELETE_AUTHORS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAuthorsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.DELETE_AUTHORS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.DELETE_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyAuthors Action.
   * Creates a new instance in authors of this model.
   *
   * @param {any} id Page id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyAuthors: class implements Action {
    public readonly type = PageActionTypes.CREATE_MANY_AUTHORS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAuthorsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyAuthorsSuccess: class implements Action {
    public readonly type = PageActionTypes.CREATE_MANY_AUTHORS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAuthorsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyAuthorsFail: class implements Action {
    public readonly type = PageActionTypes.CREATE_MANY_AUTHORS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});