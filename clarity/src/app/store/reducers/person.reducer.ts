import { Map, Record, List } from 'immutable';
import { Person, EmailAddress } from "../../shared/sdk/models";
import { PersonActions } from '../actions/person.actions';
import { EmailActions } from '../actions/email.actions';
import { PersonState, PersonStateRecord } from '../state/person.state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: PersonState = new PersonStateRecord() as PersonState;

export const personReducer: ActionReducer<PersonState> = 
	(state: PersonState = initialState, { type, payload }: Action): PersonState => {
	switch(type) {
		case PersonActions.GET_ALL_PEOPLES_SUCCESS:
			const _people: Person[] = payload;
			const peopleIds: string[] = _people.map(person => person.id);
			const peopleEntities = _people.reduce((people: {[id: string]: Person }, person: Person) => { 
				return Object.assign(people, {
					[person.id] : person
				})
			},{ });
			return state.merge({
				peopleIds: peopleIds,
				peopleEntities: peopleEntities
			}) as PersonState;
		case PersonActions.GET_PERSON:
		case PersonActions.UPDATE_PERSON:
		case PersonActions.CREATE_PERSON:
			return state.merge({
				loading: true,
				loaded: false,
			}) as PersonState;
		case PersonActions.GET_PERSON_SUCCESS:
		case PersonActions.UPDATE_PERSON_SUCCESS:
		case PersonActions.CREATE_PERSON_SUCCESS:
			return state.merge({
				loaded: true,
				loading: false,
				selectedPerson: payload,
				selectedPersonId: payload.id
			}) as PersonState;			
		case PersonActions.REMOVE_PERSON_SUCCESS:
			return state.merge({
				peopleIds: state.peopleIds.filter(i => i != payload.id),
				peopleEntities: state.peopleEntities.filter((obj) => obj.id != payload.id),
				selectedPerson: Map({}),
				selectedPersonId: null,
			}) as PersonState;
		default:
			return state;
	}
}