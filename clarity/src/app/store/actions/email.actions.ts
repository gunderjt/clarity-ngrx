import { Action } from '@ngrx/store';
import { EmailAddress, LoopBackFilter } from "../../shared/sdk/models";

export class EmailActions {
	static EMAILS_GET = '[person-email] EMAILS_GET';
	static EMAILS_GET_SUCCESS = '[person-email] EMAILS_GET_SUCCESS';
	static EMAILS_GET_FAILED = '[person-email] EMAILS_GET_FAILED';

	static EMAIL_ADD = '[person-email] EMAIL_ADD';
	static EMAIL_ADD_SUCCESS = '[person-email] EMAIL_ADD_SUCCESS';
	static EMAIL_ADD_FAILED = '[person-email] EMAIL_ADD_FAILED';

	static EMAIL_UPDATE = '[person-email] EMAIL_UPDATE';
	static EMAIL_UPDATE_SUCCESS = '[person-email] EMAIL_UPDATE_SUCCESS';
	static EMAIL_UPDATE_FAILED = '[person-email] EMAIL_UPDATE_FAILED';

	static EMAIL_REMOVE = '[person-email] EMAIL_REMOVE';
	static EMAIL_REMOVE_SUCCESS = '[person-email] EMAIL_REMOVE_SUCCESS';
	static EMAIL_REMOVE_FAILED = '[person-email] EMAIL_REMOVE_FAILED';

	getPersonEmails(id: string, filter?: LoopBackFilter): Action {
		return {
			type: EmailActions.EMAILS_GET,
			payload: {"id": id, "filter":filter}
		}
	}
	getPersonEmailsSuccess(emails: EmailAddress[]): Action {
		return {
			type: EmailActions.EMAILS_GET_SUCCESS,
			payload: emails,
		}
	}
	getPersonEmailsFailed(err: any): Action {
		return {
			type: EmailActions.EMAILS_GET_FAILED,
			payload: err
		}
	}

	addEmail(id: string, email: EmailAddress): Action {
		return {
			type: EmailActions.EMAIL_ADD,
			payload: {id: id, email: email}
		}
	}
	addEmailSuccess(email: EmailAddress): Action {
		return {
			type: EmailActions.EMAIL_ADD_SUCCESS,
			payload: email,
		}
	}
	addEmailFailed(err: any): Action {
		return {
			type: EmailActions.EMAIL_ADD_FAILED,
			payload: err,
		}
	}

	updateEmail(id: string, email: EmailAddress): Action {
		return {
			type: EmailActions.EMAIL_UPDATE,
			payload: {id: id, email: email}
		}
	}
	updateEmailSuccess(email:EmailAddress): Action {
		return {
			type: EmailActions.EMAIL_UPDATE_SUCCESS,
			payload: email
		}
	}
	updateEmailFailed(err: any): Action {
		return {
			type: EmailActions.EMAIL_UPDATE_FAILED,
			payload: err
		}
	}

	removeEmail(email: EmailAddress): Action {
		return {
			type: EmailActions.EMAIL_REMOVE,
			payload: email,
		}
	}
	removeEmailSuccess(email: EmailAddress): Action {
		return {
			type: EmailActions.EMAIL_REMOVE_SUCCESS,
			payload: email,
		}
	}
	removeEmailFailed(err: any): Action {
		return {
			type: EmailActions.EMAIL_REMOVE_FAILED,
			payload: err,
		}
	}
}