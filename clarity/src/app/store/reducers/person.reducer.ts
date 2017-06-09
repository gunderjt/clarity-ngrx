import { Person } from "../../shared/sdk/models";
import { PersonActions } from '../actions/person.actions';
import { PersonState, PersonStateRecord } from '../state/person.state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: PersonState = new PersonStateRecord() as PersonState;

export const personReducer: ActionReducer<PersonState> = 
	(state: PersonState = initialState, { type, payload }: Action): PersonState => {
	switch(type) {
		case PersonActions.GET_ALL_PEOPLES_SUCCESS:
			const _people: Person[] = payload.people;
			const peopleIds: number[] = _people.map(person => person.id);
			const peopleEntities = _people.reduce((people: {[id: number]: Person }, person: Person) => { 
				return Object.assign(people, {
					[person.id] : person
				})
			},{ });
			return state.merge({
				peopleIds: peopleIds,
				peopleEntities: peopleEntities
			}) as PersonState;
		case PersonActions.GET_PERSON_SUCCESS:
			return state.merge({
				selectedPerson: payload,
				selectedPersonId: payload.id
			}) as PersonState;
		default:
			return state;
	}
}