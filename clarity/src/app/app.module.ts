import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { RouterStoreModule } from '@ngrx/router-store';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SharedModule } from "./shared/shared.module";
import { NotifyService } from "./shared/UINotify/ui-notify.service";
import { ToastyModule } from 'ng2-toasty';
import { reducer } from './store/store.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './store/store.module';
import { PersonModule } from './person/person.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        ToastyModule.forRoot(),
        BrowserModule,
        HttpModule,
        ROUTING,
        SharedModule,
        PersonModule,
        AppStoreModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
          maxAge: 5
        }),
        RouterStoreModule.connectRouter(),
    ],
    providers: [
        NotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
