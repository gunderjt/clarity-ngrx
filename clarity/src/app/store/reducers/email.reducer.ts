import { Map, Record, List } from 'immutable';
import { EmailAddress } from "../../shared/sdk/models";
import { EmailState, EmailStateRecord } from '../state/email.state';
import { EmailActions } from '../actions/email.actions'
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: EmailState = new EmailStateRecord() as EmailState;

export const emailReducer: ActionReducer<EmailState> =
(state: EmailState = initialState, { type, payload }: Action ): EmailState => {
	switch(type) {
		case EmailActions.EMAILS_GET_SUCCESS:
			const _emails: EmailAddress[] = payload;
			const emailsIds: string[] = _emails.map(email => email.id);
			const emailsEntities = _emails.reduce((emails: {[id: string]: EmailAddress}, email: EmailAddress) => {
				return Object.assign(emails, {
					[email.id] : email
				})
			}, {});
			return state.merge({
				emailEntities: emailsEntities,
				emailIds: emailsIds
			}) as EmailState;
		case EmailActions.EMAIL_ADD_SUCCESS:
			return state.merge({
				loading: false,
				loaded: true,
				emailEntities: state.emailEntities.merge({[payload.id]:payload}),
				emailIds: state.emailIds.concat(payload.id)
			}) as EmailState;
		case EmailActions.EMAIL_REMOVE_SUCCESS:
			let test = state.emailEntities.filter((obj) => {
				return obj.id !== payload
			})
			return state.merge({
				emailEntities: state.emailEntities.delete(payload.id),
				emailIds: state.emailIds.filter(i => i !== payload.id),
			}) as EmailState;
		case EmailActions.EMAIL_UPDATE_SUCCESS:
			return state.merge({
				emailEntities: Object.assign({}, state.emailEntities, {[payload.id]: payload})
			}) as EmailState;
		default:
			return state;
	}
}