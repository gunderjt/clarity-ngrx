/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, EmailAddress } from '../models';

export const EmailAddressActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('EmailAddress'), {
  GET_PERSON: type('[EmailAddress] getPerson'),
  GET_PERSON_SUCCESS: type('[EmailAddress] getPerson success'),
  GET_PERSON_FAIL: type('[EmailAddress] getPerson fail'),

});
export const EmailAddressActions =
Object.assign(BaseLoopbackActionsFactory<EmailAddress>('EmailAddress', EmailAddressActionTypes), {

  /**
   * getPerson Action.
   * Fetches belongsTo relation person.
   *
   * @param {any} id EmailAddress id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getPerson: class implements Action {
    public readonly type = EmailAddressActionTypes.GET_PERSON;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getPersonSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getPersonSuccess: class implements Action {
    public readonly type = EmailAddressActionTypes.GET_PERSON_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPersonFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPersonFail: class implements Action {
    public readonly type = EmailAddressActionTypes.GET_PERSON_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});