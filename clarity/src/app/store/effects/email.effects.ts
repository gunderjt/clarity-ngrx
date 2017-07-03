import { EmailAddress, LoopBackFilter } from "../../shared/sdk/models";
import { EmailActions } from '../actions/email.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { PersonApi, EmailAddressApi } from "../../shared/sdk/services";
import { NotifyService } from '../../shared/UINotify/ui-notify.service';

@Injectable()
export class EmailEffects {
	constructor(
		private actions$: Actions,
		private personService: PersonApi,
		private emailService: EmailAddressApi,
		private emailActions: EmailActions,
		private notify: NotifyService,
	) { };

	@Effect()
	GetPersonEmails$: Observable<Action> = this.actions$
		.ofType(EmailActions.EMAILS_GET)
		.switchMap(({type, payload}:Action) => this.personService.getEmails(payload.id, payload.filter)
			.map((data: EmailAddress[]) =>
			{
				return this.emailActions.getPersonEmailsSuccess(data);
			})
			.catch((err) =>
			{
				this.notify.send({type: 'error', title:'Error', msg: "Get Emails failed"});
				return Observable.of(this.emailActions.getPersonEmailsFailed(err));
			})
		);

	@Effect()
	AddEmail$: Observable<Action> = this.actions$
		.ofType(EmailActions.EMAIL_ADD)
		.switchMap(({type, payload}: Action) => this.personService.createEmails(payload.id, payload.email)
			.map((data: EmailAddress) => {
				return this.emailActions.addEmailSuccess(data);
			})
			.catch((err) => 
			{
				this.notify.send({type: 'error', title:'Error', msg: "Add Emails failed"});
				return Observable.of(this.emailActions.addEmailFailed(err));
			})
		);

	@Effect()
	UpdateEmail$: Observable<Action> = this.actions$
		.ofType(EmailActions.EMAIL_UPDATE)
		.switchMap(({type, payload}: Action)=> this.emailService.replaceById(payload.id, payload)
			.map((data: EmailAddress) => {
				return this.emailActions.updateEmailSuccess(data);
			})
			.catch((err) =>{
				this.notify.send({type: 'error', title:'Error', msg: "Update Email failed"});
				return Observable.of(this.emailActions.updateEmailFailed(err));
			})
		);

	@Effect()
	RemoveEmail$: Observable<Action> = this.actions$
		.ofType(EmailActions.EMAIL_REMOVE)
		.switchMap(({type, payload}: Action) => 
		{
			let removedEmail: EmailAddress = payload;
			return this.emailService.deleteById(removedEmail.id)
				.map((data: any) => {
					this.notify.send({
						type:'success', 
						title: "Deletion Success", 
						msg: `${removedEmail.value} deleted`
					});
					return this.emailActions.removeEmailSuccess(removedEmail);
				})
				.catch((err) => {
					this.notify.send({type:'error', msg: err})
					return Observable.of(this.emailActions.removeEmailFailed(err))
				})
		});
}