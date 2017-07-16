import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Person, EmailAddress } from "../../shared/sdk/models";
import { PersonActions } from '../../store/actions/person.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailStoreService } from '../../store/services/email-store.service';

@Component({
	selector: 'person-emails',
	template: `
		<person-emails-list
			[emails] = "emails$ | async"
			(add) = addEmail($event)
			(remove) = removeEmail($event)
			(update) = updateEmail($event)
			(refresh) = refresh()
		></person-emails-list>
	`,
})
export class PersonEmailsComponent implements OnInit, OnDestroy {
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	private personId: string;
	@Input() person$: Observable<Person>;
	emails$: Observable<EmailAddress[]>
	loading$: Observable<boolean>;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private emailStore: EmailStoreService,
	) {}

	ngOnInit() {
		this.loading$ = this.emailStore.loading$;
		this.emails$ = this.emailStore.emails$;
		this.person$
		.takeUntil(this.ngUnsubscribe)
		.subscribe((person) => this.personId = person.id);
	}

	refresh() {
		this.emailStore.getPersonEmails(this.personId);
	}

	addEmail() {
		//Redirect to email Popout
		this.router.navigate([{ outlets: {modal: ['people', this.personId, 'email', 'new'] } }])
	}

	updateEmail(email: EmailAddress) {
		//Redirect to email Popout
		this.router.navigate([{ outlets: {modal: ['email', email.id, 'edit'] } }])
	}

	removeEmail(email: EmailAddress) {
		this.emailStore.removeEmail(email);
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}