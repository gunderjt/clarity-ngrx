import { Routes } from '@angular/router';
import { PeopleComponent } from './smart/people.component';
import { PersonComponent } from './smart/person.component';
import { PersonFormComponent } from './smart/person-form.component';
import { PersonResolver } from './smart/person.resolver';

export const PersonRoutes: Routes = [
	{
		path: '', 
		component: PeopleComponent,
		pathMatch: 'full',
		data: {
			title: 'List'
		},
		children: [
			{
				path: "new", 
				component: PersonFormComponent,
				data: {
					title: 'New'
				},
				outlet: 'modal'
			},
		]
	},
	{
		path: ":id",
		resolve: { person: PersonResolver },
		children: [
			{
				path: '',
				component: PersonComponent,
				data: {
					title: 'Details'
				}
			},
			{
				path: 'edit',
				component: PersonFormComponent,
				data: {
					title: 'Edit',
				},
				outlet: 'modal'
			}
		]
	},
	
];