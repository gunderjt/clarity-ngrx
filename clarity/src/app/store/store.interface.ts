import { PersonState } from './state/person.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
	people: PersonState,
	router: RouterState,
}