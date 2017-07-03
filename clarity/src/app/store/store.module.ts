import { NgModule } from '@angular/core';

//Store
/*Actions*/
import { PersonActions } from '../store/actions/person.actions';
import { EmailActions } from '../store/actions/email.actions';
/*Effects*/
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from '../store/effects/person.effects';
import { EmailEffects } from '../store/effects/email.effects';
/*Store Api Services*/
import { PersonStoreService } from './services/person-store.service'

const appEffectsRun = [
  EffectsModule.run(PersonEffects),
  EffectsModule.run(EmailEffects)
];

@NgModule({
	imports: [
		...appEffectsRun
	],
	declarations: [
	],
	providers: [
		PersonActions,
		EmailActions,
		PersonStoreService
	]
})
export class AppStoreModule { }