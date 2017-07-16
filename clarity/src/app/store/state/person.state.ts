import { Map, Record, List } from 'immutable';
import { Person, EmailAddress, PhoneNumber, MailingAddress } from "../../shared/sdk/models";

export interface PersonState extends Map<string, any> {
	//State Info
	loaded: boolean;
	loading: boolean;
	
	//People
	peopleIds : List<string>;
	peopleEntities : Map<string, Person>;

	//Person
	selectedPersonId : string;
	selectedPerson : Person;
}

export const PersonStateRecord = Record({
	loaded: false,
	loading: false,
	peopleIds : List([]),
	peopleEntities : Map({}),
	selectedPersonId : null,
	selectedPerson : Map({}),
});