import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { Routes, RouterModule } from '@angular/router';
import { NotifyService } from './UINotify/ui-notify.service';
import { ToastyModule } from 'ng2-toasty';
import { ClarityModule } from 'clarity-angular';
import { SDKBrowserModule } from './sdk/index';

const routes: Routes = [
];

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    RouterModule.forChild(routes),
    SDKBrowserModule.forRoot(),
    ClarityModule.forRoot(),
  ],
  exports: [
  	SidemenuComponent,
  	ToastyModule,
    SDKBrowserModule,
    ClarityModule,
  ],
  declarations: [SidemenuComponent],
  providers: [
  	NotifyService
  ]
})
export class SharedModule { }
