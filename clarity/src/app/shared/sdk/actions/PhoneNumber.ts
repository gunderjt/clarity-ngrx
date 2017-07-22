/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, PhoneNumber } from '../models';

export const PhoneNumberActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('PhoneNumber'), {
  GET_PERSON: type('[PhoneNumber] getPerson'),
  GET_PERSON_SUCCESS: type('[PhoneNumber] getPerson success'),
  GET_PERSON_FAIL: type('[PhoneNumber] getPerson fail'),

});
export const PhoneNumberActions =
Object.assign(BaseLoopbackActionsFactory<PhoneNumber>('PhoneNumber', PhoneNumberActionTypes), {

  /**
   * getPerson Action.
   * Fetches belongsTo relation person.
   *
   * @param {any} id PhoneNumber id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getPerson: class implements Action {
    public readonly type = PhoneNumberActionTypes.GET_PERSON;
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
    public readonly type = PhoneNumberActionTypes.GET_PERSON_SUCCESS;
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
    public readonly type = PhoneNumberActionTypes.GET_PERSON_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});