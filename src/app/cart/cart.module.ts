import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./cart/cart.component";
import { CardComponent } from "./card/card.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { StoreItemComponent } from "./store-item/store-item.component";
import { AmountStoreComponent } from "./amount-store/amount-store.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CartComponent,
    CardComponent,
    CheckoutComponent,
    StoreItemComponent,
    AmountStoreComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    FormsModule
  ]
})
export class CartModule { }
