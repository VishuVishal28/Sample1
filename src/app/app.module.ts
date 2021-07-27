import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { CountryComponent } from './country/country.component';
import { ShowCountryComponent } from './country/show-country/show-country.component';
import { StateComponent } from './state/state.component';
import { ShowStateComponent } from './state/show-state/show-state.component';
import { AddEditComponent } from './country/add-edit/add-edit.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { AddEditStateComponent } from './state/add-edit-state/add-edit-state.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUserComponent,
    CountryComponent,
    ShowCountryComponent,
    StateComponent,
    ShowStateComponent,
    AddEditComponent,
    AddEditUserComponent,
    AddEditStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
