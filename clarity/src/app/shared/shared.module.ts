import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { Routes, RouterModule } from '@angular/router';
import { NotifyService } from './UINotify/ui-notify.service';

import { ClarityModule } from 'clarity-angular';
import { SDKBrowserModule } from './sdk/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from './filterService/filter.service';

const routes: Routes = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SDKBrowserModule.forRoot(),
    ClarityModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  	SidemenuComponent,
    SDKBrowserModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SidemenuComponent],
  providers: [
    FilterService
  ]
})
export class SharedModule { }
