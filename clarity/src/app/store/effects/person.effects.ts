import { Person } from "../../shared/sdk/models";
import { PersonActions } from '../actions/person.actions';
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
		private notify: NotifyService,
	) { };

	@Effect()
	GetAllPeople$: Observable<Action> = this.actions$
		.ofType(PersonActions.GET_ALL_PEOPLES)
		.switchMap((action: Action) => this.personService.find()
			.map((data: any) => 
			{
				//this.notify.send({type: 'success', msg: "Loaded People"})
				return this.personActions.getAllPeoplesSuccess({people: data})
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
				.map((data: any) => 
				{
					//this.notify.send({type: 'success', msg: "Loaded Person"});
					return this.personActions.getPersonSuccess(data)
				})
				.catch((err) => 
				{
					this.notify.send({type:'error', msg: err})
					return Observable.of(this.personActions.getPersonFailed(err));
				})
			);
}
