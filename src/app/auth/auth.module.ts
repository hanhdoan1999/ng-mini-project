import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    // AuthModule
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  exports:[
  ]
})
export class AuthModule { }
