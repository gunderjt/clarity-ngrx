import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
//Resolver
import { PersonResolver } from './smart/person.resolver';
//Routes
import { PersonRoutes as routes } from './person.routes';
//SmartComponents
import { PeopleComponent } from './smart/people.component';
import { PersonComponent } from './smart/person.component';
import { PersonFormComponent as PersonSmartFormComponent } from './smart/person-form.component';
import { PersonEmailsComponent } from './smart/person-emails.component';
import { PersonEmailFormComponent } from './smart/person-email-form.component';
//DumbComponents
import { PersonListComponent } from './dumb/person-list/person-list.component';
import { PersonDetailComponent } from './dumb/person-detail/person-detail.component';
import { PersonFormComponent } from './dumb/person-form/person-form.component';
import { PersonMenuComponent } from './dumb/person-menu/person-menu.component';
import { PersonSearchComponent } from './dumb/person-search/person-search.component';
import { PersonEmailsListComponent } from './dumb/person-emails-list/person-emails-list.component';
import { EmailFormComponent } from './dumb/email-form/email-form.component';


@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		PeopleComponent,
		PersonComponent,
		PersonListComponent,
		PersonSmartFormComponent,
		PersonEmailsComponent,
		PersonEmailFormComponent,
		PersonDetailComponent,
		PersonFormComponent,
		PersonMenuComponent,
		PersonSearchComponent,
		PersonEmailsListComponent,
		EmailFormComponent
	],
	providers: [
		PersonResolver
	]
})
export class PersonModule { }
