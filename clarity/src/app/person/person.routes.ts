import { Routes } from '@angular/router';
import { PeopleComponent } from './smart/people.component';
import { PersonComponent } from './smart/person.component';
import { PersonEditComponent } from './smart/person-edit.component';
import { PersonNewComponent } from './smart/person-new.component';
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
				component: PersonNewComponent,
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
				component: PersonEditComponent,
				data: {
					title: 'Edit',
				},
				outlet: 'modal'
			}
		]
	},
	
];