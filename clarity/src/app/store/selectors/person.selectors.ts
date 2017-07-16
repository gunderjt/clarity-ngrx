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

const fetchSelectedPersonId = function (state: PersonState): string {
	return state.selectedPersonId;
}

const fetchLoaded = function (state: PersonState): boolean {
	return state.loaded;
}

const fetchLoading = function (state: PersonState): boolean {
	return state.loading;
}

// *************************** PUBLIC API's ****************************
export const getSelectedPerson = createSelector(getPersonState, fetchSelectedPerson);
export const getSelectedPersonId = createSelector(getPersonState, fetchSelectedPersonId);
export const getPeople = createSelector(getPersonState, fetchPeople);
export const getLoaded = createSelector(getPersonState, fetchLoaded);
export const getLoading = createSelector(getPersonState, fetchLoading);

