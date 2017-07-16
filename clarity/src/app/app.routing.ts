/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { PeopleComponent } from './person/smart/people.component';
import { PersonComponent } from './person/smart/person.component';
import { PersonFormComponent } from './person/smart/person-form.component';
import { PersonEmailFormComponent } from './person/smart/person-email-form.component';

import { PersonResolver } from './person/smart/person.resolver';

export const ROUTES: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent, outlet: 'modal'},
	{
		path: 'people',
		children: [
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
				resolve: { person: PersonResolver },
				children: [
					{
						path: '',
						component: PersonComponent,
						data: {
							title: 'Details'
						}
					},
				]
			},
		],
	},
	{
		path: "people/new", 
		component: PersonFormComponent,
		data: {
			title: 'New'
		},
		outlet: 'modal'
	},
	{
		path: "people/:id/edit",
		component: PersonFormComponent,
		outlet: 'modal',
		resolve: { person: PersonResolver }
	},
	{
		path: "people/:parentId/email/new",
		component: PersonEmailFormComponent,
		outlet: 'modal',
	},
	{
		path: "email/:id/edit",
		component: PersonEmailFormComponent,
		outlet: 'modal',
	}

	//{path: 'people', loadChildren: './person/person.module#PersonModule'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
