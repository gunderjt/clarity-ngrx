import { Map, Record, List } from 'immutable';
import { Person, EmailAddress, PhoneNumber, MailingAddress } from "../../shared/sdk/models";

export interface EmailState extends Map<string, any> {
	//State Info
	loaded: boolean;
	loading: boolean;

	//Emails
	emailEntities: Map<string, EmailAddress>;
	emailIds: List<string>;
}

export const EmailStateRecord = Record({
	loaded: false,
	loading: false,
	
	emailEntities: Map({}),
	emailIds: List([]),
});