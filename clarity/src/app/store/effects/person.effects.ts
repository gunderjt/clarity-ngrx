import { Person, LoopBackFilter } from "../../shared/sdk/models";
import { PersonActions } from '../actions/person.actions';
import { EmailActions } from '../actions/email.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { PersonApi } from "../../shared/sdk/services";
import { NotifyService } from '../../shared/UINotify/ui-notify.service';

@Injectable()
export class PersonEffects {
	constructor(
		private actions$: Actions,
		private personService: PersonApi,
		private personActions: PersonActions,
		private emailActions: EmailActions,
		private notify: NotifyService,
	) { };

	@Effect()
	GetAllPeople$: Observable<Action> = this.actions$
		.ofType(PersonActions.GET_ALL_PEOPLES)
		.switchMap((action: Action) => this.personService.find(action.payload as LoopBackFilter)
			.map((data: Person[]) => 
			{
				return this.personActions.getAllPeoplesSuccess(data)
			})
			.catch((err) => 
			{
				this.notify.send({type: 'error', title: "Error", msg: "Login failed"})
				return Observable.of(this.personActions.getAllPeoplesFailed(err));
			})
		);

	@Effect()
		GetPerson$: Observable<Action> = this.actions$
			.ofType(PersonActions.GET_PERSON)
			.switchMap((action: Action) => this.personService.findById(action.payload)
				.mergeMap((person: Person) => 
				{
					return [
						this.personActions.getPersonSuccess(person),
						this.emailActions.getPersonEmailsSuccess(person.emails),
					];
				})
				.catch((err) => 
				{
					this.notify.send({type:'error', msg: err})
					return Observable.of(this.personActions.getPersonFailed(err));
				})
			);

	@Effect()
		UpdatePerson$: Observable<Action> = this.actions$
			.ofType(PersonActions.UPDATE_PERSON)
			.switchMap((action:Action) => {
				let person: Person = action.payload.person;
				return this.personService.updateAttributes(action.payload.id, person)
					.map((data: Person) => {
						this.notify.send({
							type: 'success', 
							msg: `${person.firstName} ${person.lastName} has been updated`,
							title: "Update Successful"
						});
						return this.personActions.updatePersonSuccess(data)
					})
					.catch((err) => {
						this.notify.send({type:'error', msg: err})
						return Observable.of(this.personActions.updatePersonFailed(err))
					})
			});

	@Effect()
		DeletePerson$: Observable<Action> = this.actions$
			.ofType(PersonActions.REMOVE_PERSON)
			.switchMap((action:Action) => {
				let removedPerson: Person = action.payload;
				return this.personService.deleteById(action.payload.id)
					.map((data: any) => {
						this.notify.send({
							type:'success', 
							title: "Deletion Success", 
							msg: `${removedPerson.firstName} ${removedPerson.lastName} deleted`
						});
						return this.personActions.removePersonSuccess(removedPerson);
					})
					.catch((err) => {
						this.notify.send({type:'error', msg: err})
						return Observable.of(this.personActions.updatePersonFailed(err))
					})
			});

	@Effect()
		CreatePerson$: Observable<Action> = this.actions$
			.ofType(PersonActions.CREATE_PERSON)
			.switchMap((action:Action) => {
				let createdPerson: Person = action.payload;
				return this.personService.create(createdPerson)
					.map((data: any) => {
						this.notify.send({
							type:'success',
							title: "Creation Successful",
							msg: `${createdPerson.firstName} ${createdPerson.lastName}`
						});
						return this.personActions.createPersonSuccess(data as Person);
					})
					.catch((err) => {
						this.notify.send({type:'error', msg: err})
						return Observable.of(this.personActions.updatePersonFailed(err))
					})
			});
			
}
