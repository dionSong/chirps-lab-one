import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ChirpFormComponent } from './components/chirp-form/chirp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChirpFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
