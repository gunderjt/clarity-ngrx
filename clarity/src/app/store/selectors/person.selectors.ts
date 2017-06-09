import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';
import { PersonState } from '../state/person.state';
import { Person } from "../../shared/sdk/models";
import { AppState } from '../store.interface';

//base person state selector function
export function getPersonState(state: AppState): PersonState {
	return state.people;
}

// ******************** Individual selectors ***************************
export function fetchPeople(state: PersonState) {
  const ids = state.peopleIds.toJS();
  const peopleEntities = state.peopleEntities.toJS();
  const return_obj = ids.map(id=>peopleEntities[id]);
  return ids.map(id => peopleEntities[id]);
}

const fetchSelectedPerson = function (state: PersonState): Person {
  return state.selectedPerson;
};

// *************************** PUBLIC API's ****************************
export const getSelectedPerson = createSelector(getPersonState, fetchSelectedPerson);
export const getPeople = createSelector(getPersonState, fetchPeople);