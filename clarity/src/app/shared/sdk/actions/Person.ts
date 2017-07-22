/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Person } from '../models';

export const PersonActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Person'), {
  GET_AFFILIATIONS: type('[Person] getAffiliations'),
  GET_AFFILIATIONS_SUCCESS: type('[Person] getAffiliations success'),
  GET_AFFILIATIONS_FAIL: type('[Person] getAffiliations fail'),

  CREATE_AFFILIATIONS: type('[Person] createAffiliations'),
  CREATE_AFFILIATIONS_SUCCESS: type('[Person] createAffiliations success'),
  CREATE_AFFILIATIONS_FAIL: type('[Person] createAffiliations fail'),

  UPDATE_AFFILIATIONS: type('[Person] updateAffiliations'),
  UPDATE_AFFILIATIONS_SUCCESS: type('[Person] updateAffiliations success'),
  UPDATE_AFFILIATIONS_FAIL: type('[Person] updateAffiliations fail'),

  DESTROY_AFFILIATIONS: type('[Person] destroyAffiliations'),
  DESTROY_AFFILIATIONS_SUCCESS: type('[Person] destroyAffiliations success'),
  DESTROY_AFFILIATIONS_FAIL: type('[Person] destroyAffiliations fail'),

  FIND_BY_ID_PHONENUMBERS: type('[Person] findByIdPhoneNumbers'),
  FIND_BY_ID_PHONENUMBERS_SUCCESS: type('[Person] findByIdPhoneNumbers success'),
  FIND_BY_ID_PHONENUMBERS_FAIL: type('[Person] findByIdPhoneNumbers fail'),

  DESTROY_BY_ID_PHONENUMBERS: type('[Person] destroyByIdPhoneNumbers'),
  DESTROY_BY_ID_PHONENUMBERS_SUCCESS: type('[Person] destroyByIdPhoneNumbers success'),
  DESTROY_BY_ID_PHONENUMBERS_FAIL: type('[Person] destroyByIdPhoneNumbers fail'),

  UPDATE_BY_ID_PHONENUMBERS: type('[Person] updateByIdPhoneNumbers'),
  UPDATE_BY_ID_PHONENUMBERS_SUCCESS: type('[Person] updateByIdPhoneNumbers success'),
  UPDATE_BY_ID_PHONENUMBERS_FAIL: type('[Person] updateByIdPhoneNumbers fail'),

  FIND_BY_ID_EMAILS: type('[Person] findByIdEmails'),
  FIND_BY_ID_EMAILS_SUCCESS: type('[Person] findByIdEmails success'),
  FIND_BY_ID_EMAILS_FAIL: type('[Person] findByIdEmails fail'),

  DESTROY_BY_ID_EMAILS: type('[Person] destroyByIdEmails'),
  DESTROY_BY_ID_EMAILS_SUCCESS: type('[Person] destroyByIdEmails success'),
  DESTROY_BY_ID_EMAILS_FAIL: type('[Person] destroyByIdEmails fail'),

  UPDATE_BY_ID_EMAILS: type('[Person] updateByIdEmails'),
  UPDATE_BY_ID_EMAILS_SUCCESS: type('[Person] updateByIdEmails success'),
  UPDATE_BY_ID_EMAILS_FAIL: type('[Person] updateByIdEmails fail'),

  FIND_BY_ID_PAGES: type('[Person] findByIdPages'),
  FIND_BY_ID_PAGES_SUCCESS: type('[Person] findByIdPages success'),
  FIND_BY_ID_PAGES_FAIL: type('[Person] findByIdPages fail'),

  DESTROY_BY_ID_PAGES: type('[Person] destroyByIdPages'),
  DESTROY_BY_ID_PAGES_SUCCESS: type('[Person] destroyByIdPages success'),
  DESTROY_BY_ID_PAGES_FAIL: type('[Person] destroyByIdPages fail'),

  UPDATE_BY_ID_PAGES: type('[Person] updateByIdPages'),
  UPDATE_BY_ID_PAGES_SUCCESS: type('[Person] updateByIdPages success'),
  UPDATE_BY_ID_PAGES_FAIL: type('[Person] updateByIdPages fail'),

  LINK_PAGES: type('[Person] linkPages'),
  LINK_PAGES_SUCCESS: type('[Person] linkPages success'),
  LINK_PAGES_FAIL: type('[Person] linkPages fail'),

  UNLINK_PAGES: type('[Person] unlinkPages'),
  UNLINK_PAGES_SUCCESS: type('[Person] unlinkPages success'),
  UNLINK_PAGES_FAIL: type('[Person] unlinkPages fail'),

  FIND_BY_ID_ADDRESSES: type('[Person] findByIdAddresses'),
  FIND_BY_ID_ADDRESSES_SUCCESS: type('[Person] findByIdAddresses success'),
  FIND_BY_ID_ADDRESSES_FAIL: type('[Person] findByIdAddresses fail'),

  DESTROY_BY_ID_ADDRESSES: type('[Person] destroyByIdAddresses'),
  DESTROY_BY_ID_ADDRESSES_SUCCESS: type('[Person] destroyByIdAddresses success'),
  DESTROY_BY_ID_ADDRESSES_FAIL: type('[Person] destroyByIdAddresses fail'),

  UPDATE_BY_ID_ADDRESSES: type('[Person] updateByIdAddresses'),
  UPDATE_BY_ID_ADDRESSES_SUCCESS: type('[Person] updateByIdAddresses success'),
  UPDATE_BY_ID_ADDRESSES_FAIL: type('[Person] updateByIdAddresses fail'),

  FIND_BY_ID_TAGS: type('[Person] findByIdTags'),
  FIND_BY_ID_TAGS_SUCCESS: type('[Person] findByIdTags success'),
  FIND_BY_ID_TAGS_FAIL: type('[Person] findByIdTags fail'),

  DESTROY_BY_ID_TAGS: type('[Person] destroyByIdTags'),
  DESTROY_BY_ID_TAGS_SUCCESS: type('[Person] destroyByIdTags success'),
  DESTROY_BY_ID_TAGS_FAIL: type('[Person] destroyByIdTags fail'),

  UPDATE_BY_ID_TAGS: type('[Person] updateByIdTags'),
  UPDATE_BY_ID_TAGS_SUCCESS: type('[Person] updateByIdTags success'),
  UPDATE_BY_ID_TAGS_FAIL: type('[Person] updateByIdTags fail'),

  GET_PHONENUMBERS: type('[Person] getPhoneNumbers'),
  GET_PHONENUMBERS_SUCCESS: type('[Person] getPhoneNumbers success'),
  GET_PHONENUMBERS_FAIL: type('[Person] getPhoneNumbers fail'),

  CREATE_PHONENUMBERS: type('[Person] createPhoneNumbers'),
  CREATE_PHONENUMBERS_SUCCESS: type('[Person] createPhoneNumbers success'),
  CREATE_PHONENUMBERS_FAIL: type('[Person] createPhoneNumbers fail'),

  DELETE_PHONENUMBERS: type('[Person] deletePhoneNumbers'),
  DELETE_PHONENUMBERS_SUCCESS: type('[Person] deletePhoneNumbers success'),
  DELETE_PHONENUMBERS_FAIL: type('[Person] deletePhoneNumbers fail'),

  GET_EMAILS: type('[Person] getEmails'),
  GET_EMAILS_SUCCESS: type('[Person] getEmails success'),
  GET_EMAILS_FAIL: type('[Person] getEmails fail'),

  CREATE_EMAILS: type('[Person] createEmails'),
  CREATE_EMAILS_SUCCESS: type('[Person] createEmails success'),
  CREATE_EMAILS_FAIL: type('[Person] createEmails fail'),

  DELETE_EMAILS: type('[Person] deleteEmails'),
  DELETE_EMAILS_SUCCESS: type('[Person] deleteEmails success'),
  DELETE_EMAILS_FAIL: type('[Person] deleteEmails fail'),

  GET_PAGES: type('[Person] getPages'),
  GET_PAGES_SUCCESS: type('[Person] getPages success'),
  GET_PAGES_FAIL: type('[Person] getPages fail'),

  CREATE_PAGES: type('[Person] createPages'),
  CREATE_PAGES_SUCCESS: type('[Person] createPages success'),
  CREATE_PAGES_FAIL: type('[Person] createPages fail'),

  DELETE_PAGES: type('[Person] deletePages'),
  DELETE_PAGES_SUCCESS: type('[Person] deletePages success'),
  DELETE_PAGES_FAIL: type('[Person] deletePages fail'),

  GET_ADDRESSES: type('[Person] getAddresses'),
  GET_ADDRESSES_SUCCESS: type('[Person] getAddresses success'),
  GET_ADDRESSES_FAIL: type('[Person] getAddresses fail'),

  CREATE_ADDRESSES: type('[Person] createAddresses'),
  CREATE_ADDRESSES_SUCCESS: type('[Person] createAddresses success'),
  CREATE_ADDRESSES_FAIL: type('[Person] createAddresses fail'),

  DELETE_ADDRESSES: type('[Person] deleteAddresses'),
  DELETE_ADDRESSES_SUCCESS: type('[Person] deleteAddresses success'),
  DELETE_ADDRESSES_FAIL: type('[Person] deleteAddresses fail'),

  GET_TAGS: type('[Person] getTags'),
  GET_TAGS_SUCCESS: type('[Person] getTags success'),
  GET_TAGS_FAIL: type('[Person] getTags fail'),

  CREATE_TAGS: type('[Person] createTags'),
  CREATE_TAGS_SUCCESS: type('[Person] createTags success'),
  CREATE_TAGS_FAIL: type('[Person] createTags fail'),

  DELETE_TAGS: type('[Person] deleteTags'),
  DELETE_TAGS_SUCCESS: type('[Person] deleteTags success'),
  DELETE_TAGS_FAIL: type('[Person] deleteTags fail'),

  CREATE_MANY_AFFILIATIONS: type('[Person] createManyAffiliations'),
  CREATE_MANY_AFFILIATIONS_SUCCESS: type('[Person] createManyAffiliations success'),
  CREATE_MANY_AFFILIATIONS_FAIL: type('[Person] createManyAffiliations fail'),

  CREATE_MANY_PHONENUMBERS: type('[Person] createManyPhoneNumbers'),
  CREATE_MANY_PHONENUMBERS_SUCCESS: type('[Person] createManyPhoneNumbers success'),
  CREATE_MANY_PHONENUMBERS_FAIL: type('[Person] createManyPhoneNumbers fail'),

  CREATE_MANY_EMAILS: type('[Person] createManyEmails'),
  CREATE_MANY_EMAILS_SUCCESS: type('[Person] createManyEmails success'),
  CREATE_MANY_EMAILS_FAIL: type('[Person] createManyEmails fail'),

  CREATE_MANY_PAGES: type('[Person] createManyPages'),
  CREATE_MANY_PAGES_SUCCESS: type('[Person] createManyPages success'),
  CREATE_MANY_PAGES_FAIL: type('[Person] createManyPages fail'),

  CREATE_MANY_ADDRESSES: type('[Person] createManyAddresses'),
  CREATE_MANY_ADDRESSES_SUCCESS: type('[Person] createManyAddresses success'),
  CREATE_MANY_ADDRESSES_FAIL: type('[Person] createManyAddresses fail'),

  CREATE_MANY_TAGS: type('[Person] createManyTags'),
  CREATE_MANY_TAGS_SUCCESS: type('[Person] createManyTags success'),
  CREATE_MANY_TAGS_FAIL: type('[Person] createManyTags fail'),

});
export const PersonActions =
Object.assign(BaseLoopbackActionsFactory<Person>('Person', PersonActionTypes), {

  /**
   * getAffiliations Action.
   * Fetches hasOne relation affiliations.
   *
   * @param {any} id Person id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getAffiliations: class implements Action {
    public readonly type = PersonActionTypes.GET_AFFILIATIONS;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getAffiliationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getAffiliationsSuccess: class implements Action {
    public readonly type = PersonActionTypes.GET_AFFILIATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAffiliationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAffiliationsFail: class implements Action {
    public readonly type = PersonActionTypes.GET_AFFILIATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createAffiliations Action.
   * Creates a new instance in affiliations of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createAffiliations: class implements Action {
    public readonly type = PersonActionTypes.CREATE_AFFILIATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAffiliationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createAffiliationsSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_AFFILIATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAffiliationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createAffiliationsFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_AFFILIATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateAffiliations Action.
   * Update affiliations of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateAffiliations: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_AFFILIATIONS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateAffiliationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateAffiliationsSuccess: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_AFFILIATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateAffiliationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateAffiliationsFail: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_AFFILIATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyAffiliations Action.
   * Deletes affiliations of this model.
   *
   * @param {any} id Person id
   * @param {any} meta (optional).
   * 
   */
  destroyAffiliations: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_AFFILIATIONS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * destroyAffiliationsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyAffiliationsSuccess: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_AFFILIATIONS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyAffiliationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyAffiliationsFail: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_AFFILIATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdPhoneNumbers Action.
   * Find a related item by id for phoneNumbers.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for phoneNumbers
   * @param {any} meta (optional).
   * 
   */
  findByIdPhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_PHONENUMBERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_PHONENUMBERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPhoneNumbers Action.
   * Delete a related item by id for phoneNumbers.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for phoneNumbers
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_PHONENUMBERS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_PHONENUMBERS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPhoneNumbers Action.
   * Update a related item by id for phoneNumbers.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for phoneNumbers
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_PHONENUMBERS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_PHONENUMBERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdEmails Action.
   * Find a related item by id for emails.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for emails
   * @param {any} meta (optional).
   * 
   */
  findByIdEmails: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_EMAILS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdEmails Action.
   * Delete a related item by id for emails.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for emails
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmails: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_EMAILS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdEmails Action.
   * Update a related item by id for emails.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for emails
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmails: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_EMAILS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdPages Action.
   * Find a related item by id for pages.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for pages
   * @param {any} meta (optional).
   * 
   */
  findByIdPages: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_PAGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdPagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_PAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdPagesFail: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdPages Action.
   * Delete a related item by id for pages.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for pages
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPages: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_PAGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPagesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_PAGES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdPagesFail: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdPages Action.
   * Update a related item by id for pages.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for pages
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdPages: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_PAGES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdPagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_PAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdPagesFail: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * linkPages Action.
   * Add a related item by id for pages.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for pages
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  linkPages: class implements Action {
    public readonly type = PersonActionTypes.LINK_PAGES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * linkPagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  linkPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.LINK_PAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * linkPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  linkPagesFail: class implements Action {
    public readonly type = PersonActionTypes.LINK_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * unlinkPages Action.
   * Remove the pages relation to an item by id.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for pages
   * @param {any} meta (optional).
   * 
   */
  unlinkPages: class implements Action {
    public readonly type = PersonActionTypes.UNLINK_PAGES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkPagesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  unlinkPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.UNLINK_PAGES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * unlinkPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  unlinkPagesFail: class implements Action {
    public readonly type = PersonActionTypes.UNLINK_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdAddresses Action.
   * Find a related item by id for addresses.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for addresses
   * @param {any} meta (optional).
   * 
   */
  findByIdAddresses: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_ADDRESSES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdAddressesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_ADDRESSES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdAddresses Action.
   * Delete a related item by id for addresses.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for addresses
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAddresses: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_ADDRESSES;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAddressesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_ADDRESSES_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdAddresses Action.
   * Update a related item by id for addresses.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for addresses
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdAddresses: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_ADDRESSES;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdAddressesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_ADDRESSES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByIdTags Action.
   * Find a related item by id for tags.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for tags
   * @param {any} meta (optional).
   * 
   */
  findByIdTags: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_TAGS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * findByIdTagsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByIdTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_TAGS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByIdTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByIdTagsFail: class implements Action {
    public readonly type = PersonActionTypes.FIND_BY_ID_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * destroyByIdTags Action.
   * Delete a related item by id for tags.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for tags
   * @param {any} meta (optional).
   * 
   */
  destroyByIdTags: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_TAGS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdTagsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  destroyByIdTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_TAGS_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * destroyByIdTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  destroyByIdTagsFail: class implements Action {
    public readonly type = PersonActionTypes.DESTROY_BY_ID_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * updateByIdTags Action.
   * Update a related item by id for tags.
   *
   * @param {any} id Person id
   * @param {any} fk Foreign key for tags
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  updateByIdTags: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_TAGS;
      public payload: {id: any, fk: any, data: any};

    constructor(id: any, fk: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, fk, data};
    }
  },
  /**
   * updateByIdTagsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  updateByIdTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_TAGS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * updateByIdTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  updateByIdTagsFail: class implements Action {
    public readonly type = PersonActionTypes.UPDATE_BY_ID_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPhoneNumbers Action.
   * Queries phoneNumbers of Person.
   *
   * @param {any} id Person id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.GET_PHONENUMBERS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.GET_PHONENUMBERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.GET_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPhoneNumbers Action.
   * Creates a new instance in phoneNumbers of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.CREATE_PHONENUMBERS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_PHONENUMBERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePhoneNumbers Action.
   * Deletes all phoneNumbers of this model.
   *
   * @param {any} id Person id
   * @param {any} meta (optional).
   * 
   */
  deletePhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.DELETE_PHONENUMBERS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.DELETE_PHONENUMBERS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.DELETE_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getEmails Action.
   * Queries emails of Person.
   *
   * @param {any} id Person id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getEmails: class implements Action {
    public readonly type = PersonActionTypes.GET_EMAILS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.GET_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.GET_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createEmails Action.
   * Creates a new instance in emails of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createEmails: class implements Action {
    public readonly type = PersonActionTypes.CREATE_EMAILS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteEmails Action.
   * Deletes all emails of this model.
   *
   * @param {any} id Person id
   * @param {any} meta (optional).
   * 
   */
  deleteEmails: class implements Action {
    public readonly type = PersonActionTypes.DELETE_EMAILS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteEmailsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.DELETE_EMAILS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.DELETE_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getPages Action.
   * Queries pages of Person.
   *
   * @param {any} id Person id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getPages: class implements Action {
    public readonly type = PersonActionTypes.GET_PAGES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getPagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.GET_PAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getPagesFail: class implements Action {
    public readonly type = PersonActionTypes.GET_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createPages Action.
   * Creates a new instance in pages of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createPages: class implements Action {
    public readonly type = PersonActionTypes.CREATE_PAGES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_PAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createPagesFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deletePages Action.
   * Deletes all pages of this model.
   *
   * @param {any} id Person id
   * @param {any} meta (optional).
   * 
   */
  deletePages: class implements Action {
    public readonly type = PersonActionTypes.DELETE_PAGES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePagesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deletePagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.DELETE_PAGES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deletePagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deletePagesFail: class implements Action {
    public readonly type = PersonActionTypes.DELETE_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getAddresses Action.
   * Queries addresses of Person.
   *
   * @param {any} id Person id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getAddresses: class implements Action {
    public readonly type = PersonActionTypes.GET_ADDRESSES;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getAddressesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.GET_ADDRESSES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.GET_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createAddresses Action.
   * Creates a new instance in addresses of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createAddresses: class implements Action {
    public readonly type = PersonActionTypes.CREATE_ADDRESSES;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAddressesSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_ADDRESSES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteAddresses Action.
   * Deletes all addresses of this model.
   *
   * @param {any} id Person id
   * @param {any} meta (optional).
   * 
   */
  deleteAddresses: class implements Action {
    public readonly type = PersonActionTypes.DELETE_ADDRESSES;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAddressesSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.DELETE_ADDRESSES_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.DELETE_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getTags Action.
   * Queries tags of Person.
   *
   * @param {any} id Person id
   * @param {object} filter 
   * @param {any} meta (optional).
   * 
   */
  getTags: class implements Action {
    public readonly type = PersonActionTypes.GET_TAGS;
      public payload: {id: any, filter: LoopBackFilter};

    constructor(id: any, filter: LoopBackFilter = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, filter};
    }
  },
  /**
   * getTagsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  getTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.GET_TAGS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getTagsFail: class implements Action {
    public readonly type = PersonActionTypes.GET_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createTags Action.
   * Creates a new instance in tags of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createTags: class implements Action {
    public readonly type = PersonActionTypes.CREATE_TAGS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createTagsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  createTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_TAGS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createTagsFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * deleteTags Action.
   * Deletes all tags of this model.
   *
   * @param {any} id Person id
   * @param {any} meta (optional).
   * 
   */
  deleteTags: class implements Action {
    public readonly type = PersonActionTypes.DELETE_TAGS;
      
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteTagsSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  deleteTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.DELETE_TAGS_SUCCESS;
  
    constructor(public payload: any, public meta?: any) {}
  },
  /**
   * deleteTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  deleteTagsFail: class implements Action {
    public readonly type = PersonActionTypes.DELETE_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyAffiliations Action.
   * Creates a new instance in affiliations of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyAffiliations: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_AFFILIATIONS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAffiliationsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyAffiliationsSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_AFFILIATIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAffiliationsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyAffiliationsFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_AFFILIATIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPhoneNumbers Action.
   * Creates a new instance in phoneNumbers of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPhoneNumbers: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_PHONENUMBERS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPhoneNumbersSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPhoneNumbersSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_PHONENUMBERS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPhoneNumbersFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPhoneNumbersFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_PHONENUMBERS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyEmails Action.
   * Creates a new instance in emails of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyEmails: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_EMAILS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyEmailsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyEmailsSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_EMAILS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyEmailsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyEmailsFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_EMAILS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyPages Action.
   * Creates a new instance in pages of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyPages: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_PAGES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPagesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyPagesSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_PAGES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyPagesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyPagesFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_PAGES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyAddresses Action.
   * Creates a new instance in addresses of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyAddresses: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_ADDRESSES;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAddressesSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyAddressesSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_ADDRESSES_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyAddressesFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyAddressesFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_ADDRESSES_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * createManyTags Action.
   * Creates a new instance in tags of this model.
   *
   * @param {any} id Person id
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   * @param {any} meta (optional).
   * 
   */
  createManyTags: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_TAGS;
      public payload: {id: any, data: any[]};

    constructor(id: any, data: any[] = [], customHeaders?: Function, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyTagsSuccess Action.
   * 
   * @param {any} id 
   * @param {object[]} data 
   * @param {any} meta (optional).
   * 
   */
  createManyTagsSuccess: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_TAGS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * createManyTagsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  createManyTagsFail: class implements Action {
    public readonly type = PersonActionTypes.CREATE_MANY_TAGS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});