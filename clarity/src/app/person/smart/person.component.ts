import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Person } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';
import { PersonEditComponent } from '../dumb/person-edit/person-edit.component';
import { getSelectedPerson } from '../../store/selectors/person.selectors';
import { AppState } from '../../store/store.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-person',
	template: `
		<person-detail 
			[person]="person$ | async"
			(goEdit)="openEdit()"
		></person-detail>
		<person-edit
			[person]="person$ | async"
			(save)=savePerson($event)
		></person-edit>
	`,
})
export class PersonComponent implements OnInit, OnDestroy {
	private sub: any;
	person$: Observable<Person>;
	@ViewChild(PersonEditComponent) personedit: PersonEditComponent

	constructor(
		private store: Store<AppState>,
		private route: ActivatedRoute,
		private actions: PersonActions,
	) { 
	 }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
      const _id = +params['id'];
      this.store.dispatch(this.actions.getPerson(_id));
      this.person$ = this.store.select(getSelectedPerson);
    });
	}

	savePerson(person) {
		//this.store.dispatch(this.actions.savePerson)
	}

	removePerson(person) {

	}

	openEdit() {
		this.personedit.openModel();
	}

  ngOnDestroy() {
  	this.sub.unsubscribe()
  }

}
