import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
//SmartComponents
import { PeopleComponent } from './smart/people.component';
import { PersonComponent } from './smart/person.component';
import { PersonEditComponent } from './smart/person-edit.component';
import { PersonNewComponent } from './smart/person-new.component';
import { PersonResolver } from './smart/person.resolver';
//Routes
import { PersonRoutes as routes } from './person.routes';
//DumbComponents
import { PersonListComponent } from './dumb/person-list/person-list.component';
import { PersonDetailComponent } from './dumb/person-detail/person-detail.component';
import { PersonFormComponent } from './dumb/person-form/person-form.component';
import { PersonMenuComponent } from './dumb/person-menu/person-menu.component';
import { PersonSearchComponent } from './dumb/person-search/person-search.component';
import { PersonEmailsComponent } from './dumb/person-emails/person-emails.component';
import { EmailFormComponent } from './dumb/email-form/email-form.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		//RouterModule.forChild(routes),
	],
	declarations: [
		PeopleComponent,
		PersonComponent,
		PersonListComponent,
		PersonDetailComponent,
		PersonEditComponent,
		PersonNewComponent,
		PersonFormComponent,
		PersonMenuComponent,
		PersonSearchComponent,
		PersonEmailsComponent,
		EmailFormComponent
	],
	providers: [
		PersonResolver
	]
})
export class PersonModule { }
