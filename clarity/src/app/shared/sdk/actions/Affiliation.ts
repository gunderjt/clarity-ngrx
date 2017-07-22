/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Affiliation } from '../models';

export const AffiliationActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Affiliation'), {
  FIND_BY_ID_PEOPLE: type('[Affiliation] findByIdPeople'),
  FIND_BY_ID_PEOPLE_SUCCESS: type('[Affiliation] findByIdPeople success'),
  FIND_BY_ID_PEOPLE_FAIL: type('[Affiliation] findByIdPeople fail'),

  DESTROY_BY_ID_PEOPLE: type('[Affiliation] destroyByIdPeople'),
  DESTROY_BY_ID_PEOPLE_SUCCESS: type('[Affiliation] destroyByIdPeople success'),
  DESTROY_BY_ID_PEOPLE_FAIL: type('[Affiliation] destroyByIdPeople fail'),

  UPDATE_BY_ID_PEOPLE: type('[Affiliation] updateByIdPeople'),
  UPDATE_BY_ID_PEOPLE_SUCCESS: type('[Affiliation] updateByIdPeople success'),
  UPDATE_BY_ID_PEOPLE_FAIL: type('[Affiliation] updateByIdPeople fail'),

  GET_PEOPLE: type('[Affiliation] getPeople'),
  GET_PEOPLE_SUCCESS: type('[Affiliation] getPeople success'),
  GET_PEOPLE_FAIL: type('[Affiliation] getPeople fail'),

  CREATE_PEOPLE: type('[Affiliation] createPeople'),
  CREATE_PEOPLE_SUCCESS: type('[Affiliation] createPeople success'),
  CREATE_PEOPLE_FAIL: type('[Affiliation] createPeople fail'),

  DELETE_PEOPLE: type('[Affiliation] deletePeople'),
  DELETE_PEOPLE_SUCCESS: type('[Affiliation] deletePeople success'),
  DELETE_PEOPLE_FAIL: type('[Affiliation] deletePeople fail'),

  CREATE_MANY_PEOPLE: type('[Affiliation] createManyPeople'),
  CREATE_MANY_PEOPLE_SUCCESS: type('[Affiliation] createManyPeople success'),
  CREATE_MANY_PEOPLE_FAIL: type('[Affiliation] createManyPeople fail'),

});
export const AffiliationActions =
Object.assign(BaseLoopbackActionsFactory<Affiliation>('Affiliation', AffiliationActionTypes), {

  /**
   * findByIdPeople Action.
   * Find a related item by id for people.
   *
   * @param {any} id Affiliation id
   * @param {any} fk Foreign key for people
   * @param {any} meta (optional).
   * 
   */
  findByIdPeople: class implements Action {
    public readonly type = AffiliationActionTypes.FIND_BY_ID_PEOPLE;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPeopleSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.FIND_BY_ID_PEOPLE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.FIND_BY_ID_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPeople Action.
   * Delete a related item by id for people.
   *
   * @param {any} id Affiliation id
   * @param {any} fk Foreign key for people
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPeople: class implements Action {
    public readonly type = AffiliationActionTypes.DESTROY_BY_ID_PEOPLE;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPeopleSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.DESTROY_BY_ID_PEOPLE_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.DESTROY_BY_ID_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPeople Action.
   * Update a related item by id for people.
   *
   * @param {any} id Affiliation id
   * @param {any} fk Foreign key for people
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPeople: class implements Action {
    public readonly type = AffiliationActionTypes.UPDATE_BY_ID_PEOPLE;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPeopleSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.UPDATE_BY_ID_PEOPLE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.UPDATE_BY_ID_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPeople Action.
   * Queries people of Affiliation.
   *
   * @param {any} id Affiliation id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPeople: class implements Action {
    public readonly type = AffiliationActionTypes.GET_PEOPLE;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPeopleSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.GET_PEOPLE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.GET_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPeople Action.
   * Creates a new instance in people of this model.
   *
   * @param {any} id Affiliation id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPeople: class implements Action {
    public readonly type = AffiliationActionTypes.CREATE_PEOPLE;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPeopleSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.CREATE_PEOPLE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.CREATE_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePeople Action.
   * Deletes all people of this model.
   *
   * @param {any} id Affiliation id
   * @param {any} meta (optional).
   * 
   */
  deletePeople: class implements Action {
    public readonly type = AffiliationActionTypes.DELETE_PEOPLE;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePeopleSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.DELETE_PEOPLE_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.DELETE_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPeople Action.
   * Creates a new instance in people of this model.
   *
   * @param {any} id Affiliation id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPeople: class implements Action {
    public readonly type = AffiliationActionTypes.CREATE_MANY_PEOPLE;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPeopleSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPeopleSuccess: class implements Action {
    public readonly type = AffiliationActionTypes.CREATE_MANY_PEOPLE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPeopleFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPeopleFail: class implements Action {
    public readonly type = AffiliationActionTypes.CREATE_MANY_PEOPLE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});