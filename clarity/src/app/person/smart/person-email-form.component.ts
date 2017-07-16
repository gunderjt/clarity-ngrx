import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Person, EmailAddress } from "../../shared/sdk/models";
import { AppState } from '../../store/store.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailStoreService } from '../../store/services/email-store.service';
import { BaseFormComponent } from './base/base-form.component';

@Component({
	selector: 'app-person-email-form',
	template: `
		<email-form
			[email] = "injectedModel"
			[loading] = "loading$ | async"
			[title] = "getTitle()"
			[btnTxt] = "getButton()"
			(save)=onSave($event)
			(cancel)=onCancel()
		>
		</email-form>
	`,
})
export class PersonEmailFormComponent extends BaseFormComponent {
	private personId: string;

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected emailStore: EmailStoreService,
	) {
		super(route, emailStore);
	}

	ngOnInit() {
		super.ngOnInit();
		this.loading$ = this.emailStore.loading$;
		this.route.params
		.takeUntil(this.ngUnsubscribe)
		.subscribe(params => {
       this.personId = params['parentId'];
    	}
    )
	}

	createModel(data) {
		this.emailStore.addEmail(this.personId, data);
	}
	updateModel(data) {
		this.emailStore.updateEmail(this.id, data);
	}
	afterSave(data) {
		this.router.navigate([{outlets: {modal: null}}]);
	}
	onCancel() {
		this.router.navigate([{outlets: {modal: null}}]);	
	}

	public getTitle() {
		return this.id ? "Edit": "New";
	}
	public getButton() {
		return this.id ? "Update": "Create";
	}
}