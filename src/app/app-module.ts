import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoComponent } from './components/segundocomponent/segundocomponent';
import { TercerComponent } from './components/tercercomponent/tercercomponent';

@NgModule({
  declarations: [
    App, PrimerComponent, SegundoComponent, TercerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
