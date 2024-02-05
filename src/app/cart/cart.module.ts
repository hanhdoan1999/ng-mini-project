import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./cart/cart.component";
import { CardComponent } from "./card/card.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { StoreItemComponent } from "./store-item/store-item.component";
import { AmountStoreComponent } from "./amount-store/amount-store.component";



@NgModule({
  declarations: [
    CartComponent,
    CardComponent,
    CheckoutComponent,
    StoreItemComponent,
    AmountStoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
