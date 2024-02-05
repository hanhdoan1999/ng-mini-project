import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Product } from "./shared/models/cart-item";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  private totalQuantitySubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);
  

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getCartObservable(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  notifyCartChanges(): void {
    this.cartSubject.next([...this.cartItems]);
    this.calculateTotalQuantity();
    this.getTotalPrice()
  }

  addItemToCart(item: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.product.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem: CartItem = { product: item, quantity: quantity };
      this.cartItems.push(newItem);
    }
    this.notifyCartChanges();
    console.log(this.cartItems)
  }

  updateItemInCart(item: Product, newQuantity: number): void {
    const existingItem = this.cartItems.find((cartItem) => cartItem.product.id === item.id);

    if (existingItem) {
      existingItem.quantity = newQuantity;
      this.notifyCartChanges();
      console.log('Item Updated:', existingItem);
    }
  }

  removeItemFromCart(item: Product): void {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.product.id !== item.id
    );
    this.notifyCartChanges();
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotalPrice(): void {
    const totalPrice = this.cartItems.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0
    );
    this.totalPriceSubject.next(totalPrice);
  }

  getTotalQuantityObservable(): Observable<number> {
    return this.totalQuantitySubject.asObservable();
  }

  getTotalPriceObservable(): Observable<number> {
    return this.totalPriceSubject.asObservable();
  }

  calculateTotalQuantity(): void {
    const totalQuantity = this.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    this.totalQuantitySubject.next(totalQuantity);
  }
}

