import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ChirpFormComponent } from './components/chirp-form/chirp-form.component';

import {MatButtonModule, MatCheckboxModule, } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChirpFormComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
