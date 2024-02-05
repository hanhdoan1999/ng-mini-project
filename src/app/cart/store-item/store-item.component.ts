import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  @Input() id: number = 0;
  @Input() image: string = "";
  @Input() name: string = "";
  @Input() code: string = "";
  @Input() color: string = "";
  @Input() size: string = "";
  @Input() price: number = 0;
  @Input() note?: string = "";
  @Input() line?: boolean;

  @Output() handleLessEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() handlePlussEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() handleRemoveEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() handleFavoriteEvent: EventEmitter<number> = new EventEmitter<number>();

  get order(): number {
    // You can modify this logic based on your application's requirements
    return 0;
  }

  handleLess() {
    this.handleLessEvent.emit(this.id);
  }

  handlePluss() {
    this.handlePlussEvent.emit(this.id);
  }

  handleRemove() {
    this.handleRemoveEvent.emit(this.id);
  }

  handleFavorite() {
    this.handleFavoriteEvent.emit(this.id);
  }
}
