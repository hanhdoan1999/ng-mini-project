import { UtilService } from './../../shared/services/Utils.service';
import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { CartService } from "../cart.service";
import { Subscription } from "rxjs";
import { CartItem } from "../shared/models/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartSubscription: Subscription | undefined;
  // @Input() stores: any[] = [
  //     {
  //       id: 1,
  //       image:
  //         "https://images.unsplash.com/photo-1617171594202-100a53bdfe04?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
  //       name: "Blue Hoodie",
  //       code: "Hodie-B",
  //       color: "Blue",
  //       size: "M",
  //       price: 17.99,
  //       note: "Note, 1 piece"
  //     },
  //     {
  //       id: 2,
  //       image:
  //         "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
  //       name: "White Hoodie",
  //       code: "Hodie-W",
  //       color: "White",
  //       size: "M",
  //       price: 35.99
  //     }
  // ]; // Add appropriate type
  stores: CartItem[] = [];
  totalQuantity : number = 0;
  totalPrice : number = 0;
  totalPriceFinal : number = 0;

  constructor(
    // private confirmationService: ConfirmationService,
    // private messageService: MessageService,
    // private productService: BooksService,
    private cartService: CartService,
    private utilService : UtilService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.getItemInCart();
    this.cartSubscription = this.cartService.getCartObservable().subscribe((items) => {
      this.stores = items;
    });
    this.cartSubscription = this.cartService.getTotalPriceObservable().subscribe((price) => {
      this.totalPrice = price;
      this.totalPriceFinal = price + 15;
    });
    this.totalPriceFinal = this.totalPrice + 15;
  }

  
  getItemInCart(): void {
    // this.cartService.getCartItems().subscribe({
    //   next: (res) => {
    //     this.stores = res;
    //   },
    //   error: (error) => {
    //     console.error('Error in API request:', error);
    //   },
    // });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  handleLess(ev:any) {
    const {product, quantity} = ev
    this.cartService.updateItemInCart(product, quantity);
  }

  handlePlus(ev:any) {
    const {product, quantity} = ev
    this.cartService.updateItemInCart(product, quantity);
  }

  handleRemove(ev:any) {
    this.cartService.removeItemFromCart(ev);
  }

  handleFavorite(id: number) {
    // Handle the 'Favorite' event for the item with the given id
    console.log(`Handle 'Favorite' event for item with id: ${id}`);
  }

  navigateCheckoutPage() {
    this.utilService.showErrorMessage("Lỗi", "Đang cập nhật")
  }
}
