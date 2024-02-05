import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from "primeng/tabmenu";
import { HeaderComponent } from "./components/header/header.component";


@NgModule({
  declarations: [
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ]
})
export class SharedModule { }
