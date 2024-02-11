import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { BaseLoggedComponent } from './base-logged/base-logged.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    BaseAuthComponent,
    BaseLoggedComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
