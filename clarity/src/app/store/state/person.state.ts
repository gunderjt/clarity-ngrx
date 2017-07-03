import { Map, Record, List } from 'immutable';
import { Person, EmailAddress, PhoneNumber, MailingAddress } from "../../shared/sdk/models";

export interface PersonState extends Map<string, any> {
	//People
	peopleIds : List<string>;
	peopleEntities : Map<string, Person>;

	//Person
	selectedPersonId : string;
	selectedPerson : Person;

	//Person Attributes
	selectedPersonEmails: Map<string, EmailAddress>;
	selectedPersonPhones: Map<string, PhoneNumber>;
	selectedPersonAddresses: Map<string, MailingAddress>;
}

export const PersonStateRecord = Record({
	peopleIds : List([]),
	peopleEntities : Map({}),
	selectedPersonId : null,
	selectedPerson : Map({}),
	selectedPersonEmails: Map({}),
	selectedPersonPhones: Map({}),
	selectedPersonAddresses: Map({}),

});