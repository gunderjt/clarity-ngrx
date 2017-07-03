import { Map, Record, List } from 'immutable';
import { EmailAddress } from "../../shared/sdk/models";
import { initialState } from "./person.reducer";
import { PersonState } from '../state/person.state';
import { EmailActions } from '../actions/email.actions'
import { Action, ActionReducer } from '@ngrx/store';

export const emailReducer: ActionReducer<PersonState> =
(state: PersonState = initialState, { type, payload }: Action ): PersonState => {
	switch(type) {
		case EmailActions.EMAILS_GET_SUCCESS:
			const _emails: EmailAddress[] = payload;
			const emailsEntities = _emails.reduce((emails: {[id: string]: EmailAddress}, email: EmailAddress) => {
				return Object.assign(emails, {
					[email.id] : email
				})
			}, {});
			return state.merge({
				selectedPersonEmails: emailsEntities
			}) as PersonState;
		case EmailActions.EMAIL_ADD_SUCCESS:
			return state.merge({
				selectedPersonEmails: {...state.selectedPersonEmails, [payload.id]: payload}
			}) as PersonState;
		case EmailActions.EMAIL_REMOVE_SUCCESS:
			return state.merge({
				selectedPersonEmails: state.selectedPersonEmails.filter((obj) => obj.id != payload.id)
			}) as PersonState;
		case EmailActions.EMAIL_UPDATE_SUCCESS:
			return state.merge({
				selectedPersonEmails: Object.assign({}, state.selectedPersonEmails, {[payload.id]: payload})
			}) as PersonState;
		default:
			return state;
	}
}