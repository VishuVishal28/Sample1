import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  { path:'country',component:CountryComponent},
  { path:'state',component:StateComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
