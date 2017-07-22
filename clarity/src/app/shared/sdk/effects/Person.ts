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

import { PersonActionTypes, PersonActions } from '../actions/Person';
import { LoopbackErrorActions } from '../actions/error';
import { PersonApi } from '../services/index';

@Injectable()
export class PersonEffects extends BaseLoopbackEffects {
  @Effect()
  protected getAffiliations: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.GET_AFFILIATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.person.getAffiliations(action.payload.id, action.payload.refresh)
        .map((response) => new PersonActions.getAffiliationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.getAffiliationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createAffiliations: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_AFFILIATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createAffiliations(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createAffiliationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createAffiliationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateAffiliations: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UPDATE_AFFILIATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.person.updateAffiliations(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.updateAffiliationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.updateAffiliationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyAffiliations: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DESTROY_AFFILIATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.person.destroyAffiliations(action.payload.id)
        .map((response) => new PersonActions.destroyAffiliationsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.destroyAffiliationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdPhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.FIND_BY_ID_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.findByIdPhoneNumbers(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.findByIdPhoneNumbersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.findByIdPhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdPhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DESTROY_BY_ID_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.destroyByIdPhoneNumbers(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.destroyByIdPhoneNumbersSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.destroyByIdPhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdPhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UPDATE_BY_ID_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.updateByIdPhoneNumbers(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PersonActions.updateByIdPhoneNumbersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.updateByIdPhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.FIND_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.findByIdEmails(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.findByIdEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.findByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DESTROY_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.destroyByIdEmails(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.destroyByIdEmailsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.destroyByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UPDATE_BY_ID_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.updateByIdEmails(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PersonActions.updateByIdEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.updateByIdEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.FIND_BY_ID_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.findByIdPages(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.findByIdPagesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.findByIdPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DESTROY_BY_ID_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.destroyByIdPages(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.destroyByIdPagesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.destroyByIdPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UPDATE_BY_ID_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.updateByIdPages(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PersonActions.updateByIdPagesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.updateByIdPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected linkPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.LINK_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.linkPages(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PersonActions.linkPagesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.linkPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected unlinkPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UNLINK_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.unlinkPages(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.unlinkPagesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.unlinkPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.FIND_BY_ID_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.findByIdAddresses(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.findByIdAddressesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.findByIdAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DESTROY_BY_ID_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.destroyByIdAddresses(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.destroyByIdAddressesSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.destroyByIdAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UPDATE_BY_ID_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.updateByIdAddresses(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PersonActions.updateByIdAddressesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.updateByIdAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected findByIdTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.FIND_BY_ID_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.findByIdTags(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.findByIdTagsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.findByIdTagsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected destroyByIdTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DESTROY_BY_ID_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.destroyByIdTags(action.payload.id, action.payload.fk)
        .map((response) => new PersonActions.destroyByIdTagsSuccess(action.payload.id, action.payload.fk, action.meta))
        .catch((error) => concat(
          of(new PersonActions.destroyByIdTagsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected updateByIdTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.UPDATE_BY_ID_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.updateByIdTags(action.payload.id, action.payload.fk, action.payload.data)
        .map((response) => new PersonActions.updateByIdTagsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.updateByIdTagsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getPhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.GET_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.getPhoneNumbers(action.payload.id, action.payload.filter)
        .map((response) => new PersonActions.getPhoneNumbersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.getPhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createPhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createPhoneNumbers(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createPhoneNumbersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createPhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deletePhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DELETE_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.deletePhoneNumbers(action.payload.id)
        .map((response) => new PersonActions.deletePhoneNumbersSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new PersonActions.deletePhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.GET_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.getEmails(action.payload.id, action.payload.filter)
        .map((response) => new PersonActions.getEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.getEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createEmails(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DELETE_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.deleteEmails(action.payload.id)
        .map((response) => new PersonActions.deleteEmailsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new PersonActions.deleteEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.GET_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.getPages(action.payload.id, action.payload.filter)
        .map((response) => new PersonActions.getPagesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.getPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.createPages(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createPagesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deletePages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DELETE_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.deletePages(action.payload.id)
        .map((response) => new PersonActions.deletePagesSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new PersonActions.deletePagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.GET_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.getAddresses(action.payload.id, action.payload.filter)
        .map((response) => new PersonActions.getAddressesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.getAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.createAddresses(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createAddressesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DELETE_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.deleteAddresses(action.payload.id)
        .map((response) => new PersonActions.deleteAddressesSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new PersonActions.deleteAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected getTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.GET_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.getTags(action.payload.id, action.payload.filter)
        .map((response) => new PersonActions.getTagsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.getTagsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createTags(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createTagsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createTagsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected deleteTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.DELETE_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.deleteTags(action.payload.id)
        .map((response) => new PersonActions.deleteTagsSuccess(action.payload, action.meta))
        .catch((error) => concat(
          of(new PersonActions.deleteTagsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyAffiliations: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_MANY_AFFILIATIONS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createManyAffiliations(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createManyAffiliationsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createManyAffiliationsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyPhoneNumbers: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_MANY_PHONENUMBERS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createManyPhoneNumbers(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createManyPhoneNumbersSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createManyPhoneNumbersFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyEmails: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_MANY_EMAILS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createManyEmails(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createManyEmailsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createManyEmailsFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyPages: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_MANY_PAGES)
    .mergeMap((action: LoopbackAction) =>
      this.person.createManyPages(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createManyPagesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createManyPagesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyAddresses: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_MANY_ADDRESSES)
    .mergeMap((action: LoopbackAction) =>
      this.person.createManyAddresses(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createManyAddressesSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createManyAddressesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  @Effect()
  protected createManyTags: Observable<LoopbackAction> = this.actions$
    .ofType(PersonActionTypes.CREATE_MANY_TAGS)
    .mergeMap((action: LoopbackAction) =>
      this.person.createManyTags(action.payload.id, action.payload.data)
        .map((response) => new PersonActions.createManyTagsSuccess(action.payload.id, response, action.meta))
        .catch((error) => concat(
          of(new PersonActions.createManyTagsFail(error, action.meta)),
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
    @Inject(PersonApi) public person: PersonApi
  ) {
    super(actions$, person, 'Person', PersonActionTypes, PersonActions);
  }
}
