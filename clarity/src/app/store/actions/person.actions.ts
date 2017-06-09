import { Action } from '@ngrx/store';
import { Person } from "../../shared/sdk/models";

export class PersonActions {
	static GET_ALL_PEOPLES = '[person] GET_ALL_PEOPLES';
	static GET_ALL_PEOPLES_SUCCESS = '[person] GET_ALL_PEOPLES_SUCCESS';
	static GET_ALL_PEOPLES_FAILED = '[person] GET_ALL_PEOPLES_FAILED';

	static GET_PERSON = "[person] GET_PERSON";
	static GET_PERSON_SUCCESS = "[person] GET_PERSON_SUCCESS"
	static GET_PERSON_FAILED = "[person] GET_PERSON_FAILED"

	static CREATE_PERSON = "[person] CREATE_PERSON";
	static CREATE_PERSON_SUCCESS = "[person] CREATE_PERSON_SUCCESS";
	static CREATE_PERSON_FAILED = "[person] CREATE_PERSON_FAILED";

	static UPDATE_PERSON = "[person] UPDATE_PERSON";
	static UPDATE_PERSON_SUCCESS = "[person] UPDATE_PERSON_SUCCESS";
	static UPDATE_PERSON_FAILED = "[person] UPDATE_PERSON_FAILED";

	static REMOVE_PERSON = "[person] REMOVE_PERSON";
	static REMOVE_PERSON_SUCCESS = "[person] REMOVE_PERSON_SUCCESS";
	static REMOVE_PERSON_FAILED = "[person] REMOVE_PERSON_FAILED";


	getAllPeople():  Action {
		return { type: PersonActions.GET_ALL_PEOPLES };
	}
	getAllPeoplesSuccess(people: any): Action {
		return {
			type: PersonActions.GET_ALL_PEOPLES_SUCCESS,
			payload: people
		};
	}
	getAllPeoplesFailed(err: any): Action {
		return {
			type: PersonActions.GET_ALL_PEOPLES_FAILED,
			payload: err,
		}
	}
	getPerson(id: number): Action {
		return {
			type: PersonActions.GET_PERSON,
			payload: id,
		}
	}
	getPersonSuccess(person: any): Action {
		return {
			type: PersonActions.GET_PERSON_SUCCESS,
			payload: person
		}
	}
	getPersonFailed(err: any): Action {
		return {
			type: PersonActions.GET_PERSON_FAILED,
			payload: err
		}
	}
	createPerson(person: any): Action {
		return {
			type: PersonActions.CREATE_PERSON,
			payload: person
		}
	}
	createPersonSuccess(person: any): Action {
		return {
			type: PersonActions.CREATE_PERSON_SUCCESS,
			payload: person
		}
	}
	createPersonFailed(err: any): Action {
		return {
			type: PersonActions.CREATE_PERSON_FAILED,
			payload: err
		}
	}
	updatePerson(id: number, person: any): Action {
		return {
			type: PersonActions.UPDATE_PERSON,
			payload: {'id': id, "person": person}
		}
	}
	updatePersonSuccess(person: any): Action {
		return {
			type: PersonActions.UPDATE_PERSON_SUCCESS,
			payload: person
		}
	}
	updatePersonFailed(err: any): Action {
		return {
			type: PersonActions.UPDATE_PERSON_FAILED,
			payload: err
		}
	}
	removePerson(id: number): Action {
		return {
			type: PersonActions.REMOVE_PERSON,
			payload: id
		}
	}
	removePersonSuccess(id: number): Action {
		return {
			type: PersonActions.REMOVE_PERSON_SUCCESS,
			payload: id
		}
	}
	removePersonFailed(err: any): Action {
		return {
			type: PersonActions.REMOVE_PERSON_FAILED,
			payload: err
		}
	}
}