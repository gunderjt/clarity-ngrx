import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Person } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';
import { getSelectedPerson } from '../../store/selectors/person.selectors';
import { AppState } from '../../store/store.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonStoreService } from '../../store/services/person-store.service';

import { BaseFormComponent } from './base/base-form.component';

@Component({
	selector: 'app-person-form',
	template: `
		<person-form
			[person] = "injectedModel"
			[loading] = "loading$ | async"
			[title] = "getTitle()"
			[btnTxt] = "getButton()"
			(save)=onSave($event)
			(cancel)=onCancel()
		>
		</person-form>
	`,
})
export class PersonFormComponent extends BaseFormComponent {

	constructor(
		protected route: ActivatedRoute,
		protected personStore: PersonStoreService,
		private router: Router,
	) {
		super(route, personStore)
	}

	ngOnInit() {
		super.ngOnInit();
		this.loading$ = this.personStore.loading$;
	}

	public createModel(data) {
		this.personStore.createPerson(data);
	}
	public updateModel(data) {
		this.personStore.updatePerson(this.id, data);
	}

	public afterSave(data) {
		//data should be person
		this.router.navigate([{outlets: {modal: null, primary: ['people', data.id]}}])
	}

	public onCancel() {
		this.router.navigate([{outlets: {modal: null}}]);
	}

	public getTitle(): string {
		return this.id ? "Edit": "New";
	}
	public getButton(): string {
		return this.id ? "Update": "Create";
	}
}

// export class PersonEditComponent implements OnInit, OnDestroy {
// 	private ngUnsubscribe: Subject<void> = new Subject<void>();
// 	person$: Observable<Person>;
// 	loading$: Observable<boolean>;
// 	private id: string;

// 	//I'm not sure how to do it better :/
// 	redirect: boolean = false;

// 	constructor(
// 		private route: ActivatedRoute,
// 		private router: Router,
// 		private personStore: PersonStoreService,
// 	) {}

// 	ngOnInit() {
// 		this.loading$ = this.personStore.loading$;
// 		this.person$ = this.personStore.person$;
// 		this.person$
// 		.takeUntil(this.ngUnsubscribe)
// 		.subscribe((person) => this.id = person.id);
// 	}

// 	onSave(personForm) {
// 		this.redirect = true;
// 		this.personStore.updatePerson(this.id, personForm);
// 		this.router.navigate([{outlets: {modal: null}}]);
// 	}

// 	onCancel() {
// 		this.router.navigate([{outlets: {modal: null}}]);
// 	}

// 	ngOnDestroy() {
// 		this.ngUnsubscribe.next();
// 		this.ngUnsubscribe.complete();
// 	}
// }
