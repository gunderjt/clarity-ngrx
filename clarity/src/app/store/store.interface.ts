import { PersonState } from './state/person.state';
import { EmailState } from './state/email.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
	people: PersonState,
	emails: EmailState,
	router: RouterState,
}