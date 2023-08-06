import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaHomeComponent } from './components/spa-home/spa-home.component';
import { OUniversoComponent } from './components/o-universo/o-universo.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaHomeComponent,
    OUniversoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
