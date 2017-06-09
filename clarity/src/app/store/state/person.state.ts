import { Map, Record, List } from 'immutable';
import { Person } from "../../shared/sdk/models";

export interface PersonState extends Map<string, any> {
	peopleIds : List<number>;
	peopleEntities : Map<number, Person>;
	selectedPersonId : number;
	selectedPerson : Person;
}

export const PersonStateRecord = Record({
	peopleIds : List([]),
	peopleEntities : Map({}),
	selectedPersonId : null,
	selectedPerson : Map({})
});