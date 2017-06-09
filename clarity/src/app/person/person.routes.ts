import { Routes } from '@angular/router';
import { PeopleComponent } from './smart/people.component';
import { PersonComponent } from './smart/person.component';

export const PersonRoutes: Routes = [
	{ 
		path: '', 
		component: PeopleComponent,
		pathMatch: 'full',
		data: {
			title: 'List'
		}
	},
	{
		path: ":id", 
		component: PersonComponent,
		data: {
			title: 'Details'
		}
	}
];