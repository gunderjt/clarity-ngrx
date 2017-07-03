import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';
import { PersonState } from '../state/person.state';
import { Person, EmailAddress } from "../../shared/sdk/models";
import { AppState } from '../store.interface';

//base person state selector function
export function getPersonState(state: AppState): PersonState {
	return state.people;
}

// ******************** Individual selectors ***************************
export function fetchPeople(state: PersonState) {
  const ids = state.peopleIds.toJS();
  const peopleEntities = state.peopleEntities.toJS();
  return ids.map(id => peopleEntities[id]);
}

const fetchSelectedPerson = function (state: PersonState): Person {
  return state.selectedPerson;
};

const fetchSelectedPersonEmails = function (state: PersonState): EmailAddress[] {
	const emails = state.selectedPersonEmails.toJS();
	return Object.keys(emails).map((obj) => emails[obj]);
};

// *************************** PUBLIC API's ****************************
export const getSelectedPerson = createSelector(getPersonState, fetchSelectedPerson);
export const getSelectedPersonEmails = createSelector(getPersonState, fetchSelectedPersonEmails);
export const getPeople = createSelector(getPersonState, fetchPeople);
