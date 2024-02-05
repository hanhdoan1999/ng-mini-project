import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { DataViewModule } from "primeng/dataview";
import { BookAddComponent } from "./book-add/book-add.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { GalleriaModule } from "primeng/galleria";
import { InputNumberModule } from "primeng/inputnumber";
import { RippleModule } from "primeng/ripple";
import { CardModule } from "primeng/card";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { TooltipModule } from "primeng/tooltip";
import { ToolbarModule } from "primeng/toolbar";
import { ToastModule } from "primeng/toast";
import { TabMenuModule } from "primeng/tabmenu";
import { PaginatorModule } from "primeng/paginator";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    DataViewModule,
    FormsModule,
    DropdownModule,
    ConfirmDialogModule,
    DialogModule,
    GalleriaModule,
    InputNumberModule,


    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabMenuModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    TriStateCheckboxModule,
    CardModule,
    RippleModule,
  ]
})
export class BooksModule { }

