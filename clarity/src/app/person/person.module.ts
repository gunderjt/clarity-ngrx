import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
//SmartComponents
import { PeopleComponent } from './smart/people.component';
import { PersonComponent } from './smart/person.component';
//Routes
import { PersonRoutes as routes } from './person.routes';
//DumbComponents
import { PersonListComponent } from './dumb/person-list/person-list.component';

//Store
/*Actions*/
import { PersonActions } from '../store/actions/person.actions';
/*Effects*/
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from '../store/effects/person.effects';
import { PersonDetailComponent } from './dumb/person-detail/person-detail.component';
import { PersonEditComponent } from './dumb/person-edit/person-edit.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
		EffectsModule.run(PersonEffects),
	],
	declarations: [
		PeopleComponent,
		PersonComponent,
		PersonListComponent,
		PersonDetailComponent,
		PersonEditComponent
	],
	providers: [
		PersonActions
	]
})
export class PersonModule { }
