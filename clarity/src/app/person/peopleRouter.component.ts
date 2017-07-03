import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-person-router',
	template: `<router-outlet></router-outlet>
		<router-outlet name="modal"></router-outlet>`
})
export class PersonRouterComponent{
}