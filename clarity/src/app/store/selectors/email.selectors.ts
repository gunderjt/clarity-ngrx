import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';
import { AppState } from '../store.interface';
import { EmailState } from '../state/email.state';
import { EmailAddress } from "../../shared/sdk/models";

//base email state selector function
export function getEmailState(state: AppState): EmailState {
	return state.emails;
}

// ******************** Individual selectors ***************************
export function fetchEmails(state: EmailState) {
  const ids = state.emailIds.toJS();
  const emailEntities = state.emailEntities.toJS();
  return ids.map(id => emailEntities[id]);
}

const fetchLoaded = function (state: EmailState): boolean {
	return state.loaded;
}

const fetchLoading = function (state: EmailState): boolean {
	return state.loading;
}

// *************************** PUBLIC API's ****************************
export const getEmails = createSelector(getEmailState, fetchEmails);
export const getLoaded = createSelector(getEmailState, fetchLoaded);
export const getLoading = createSelector(getEmailState, fetchLoading);
