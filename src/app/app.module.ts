// app.module.ts
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { CartModule } from "./cart/cart.module";
import { AuthModule } from "./auth/auth.module";
import { HeaderComponent } from "./shared/components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { RatingModule } from "primeng/rating";
import { InputNumberModule } from "primeng/inputnumber";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmationService } from "primeng/api";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routes";
import { AdminModule } from "./admin/admin.module";
import { TabMenuModule } from "primeng/tabmenu";
import { ProfileModule } from "./profile/profile.module";
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BooksModule } from "./books/books.module";
import { DataViewModule } from "primeng/dataview";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // Other components, directives, or pipes go here
  ],
  imports: [
    BooksModule,
    ProfileModule,
    SharedModule,
    AdminModule,
    AuthModule,
    CartModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    AppRoutingModule,
    TabMenuModule,
    AvatarModule,
    AvatarGroupModule,
    DataViewModule
      // Other modules go here
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}