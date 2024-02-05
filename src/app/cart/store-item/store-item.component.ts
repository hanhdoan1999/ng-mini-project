import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent  implements OnChanges {
  @Input() id: number = 0;
  @Input() product: any = {};


  @Output() handleLessEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() handlePlusEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleRemoveEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleFavoriteEvent: EventEmitter<number> = new EventEmitter<number>();

  item : any = {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      const { product, quantity } = this.product;
      this.item = {
        ...product,
        quantity,
        totalPrice: product.price * quantity
      };
    }
  }

  handleInput(event: any, item: any) {
    const req = {
      product:item,
      // quantity: 1
      quantity: event?.value
    }
    if (event.value > event.formattedValue) {
      this.handlePlusEvent.emit(req);
    } else if (event.value < event.formattedValue) {
      this.handleLessEvent.emit(req);
    }
    this.item.quantity = event.value;
    this.item.totalPrice = this.item.price * event.value;
  }

  handleRemove(item:any) {
    this.handleRemoveEvent.emit(item);
  }

  handleFavorite() {
    this.handleFavoriteEvent.emit(this.id);
  }
}
