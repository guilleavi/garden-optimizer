/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Routing Modules */
import { AppRoutingModule } from './app-routing.module';

/* Eager Loaded Modules */
import { CoreModule } from './core/core.module';

/* Components */
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const ANGULAR_IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule
];

const ROUTING_IMPORTS = [
  AppRoutingModule
];

const EAGER_LOADED_MODULES = [
  CoreModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...ANGULAR_IMPORTS,
    ...ROUTING_IMPORTS,
    ...EAGER_LOADED_MODULES,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
