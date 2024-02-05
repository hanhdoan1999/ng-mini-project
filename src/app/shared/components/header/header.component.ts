import { CartService } from './../../../cart/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { AuthService } from '../../../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy{
  items!: MenuItem[];
  activeItem: MenuItem | undefined;

  // cartItems: any[] = [];
  totalQuantity: number = 0;
  private cartSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private cartService: CartService
    ) {}

  ngOnInit() {
    // this.cartItems = this.cartService.getCartItems();
    // this.cartSubscription = this.cartService.getCartObservable().subscribe((items) => {
    //   this.cartItems = items;
    // });

    // Subscribe to total quantity changes
    this.cartService.getTotalQuantityObservable().subscribe((totalQuantity) => {
      this.totalQuantity = totalQuantity;
      this.items = this.items.map((el)=> el.label === "Cart" ? {...el, badge: `${this.totalQuantity}`} : el)
    });

    this.items = [
      // { label: 'Admin', icon: 'pi pi-fw pi-home' },
      { label: 'My Account', icon: 'pi pi-users' },
      { label: 'Books', icon: 'pi pi-book' },
      { label: 'Admin', icon: 'pi pi-users' },
      { label: 'Cart', icon: 'pi pi-shopping-cart',  badge: `${this.totalQuantity}` },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        style: { 'margin-left': 'auto' },
      },
    ];

    this.activeItem = this.items[0];
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  onActiveItemChange(event: any) {
    switch (event.label) {
      case 'Logout':
        this.authService.logout();
        break;
      case 'Cart':
        this.router.navigate(['/cart']);
        break;
      case 'Books':
        this.router.navigate(['/list-book']);
        break;
      case 'My Account':
        this.router.navigate(['/my-profile']);
        break;
      case 'Admin':
        this.router.navigate(['/admin']);
        break;
      default:
        break;
    }
    this.activeItem = event;
  }

  isLoggedIn(): boolean {
    const isLogin = localStorage.getItem("isLogin");
    return isLogin === "true";
  }

  activateLast() {
    this.activeItem = (this.items as MenuItem[])[
      (this.items as MenuItem[]).length - 1
    ];
  }
}
