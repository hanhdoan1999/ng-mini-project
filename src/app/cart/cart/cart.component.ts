import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() stores: any[] = [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1617171594202-100a53bdfe04?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
        name: "Blue Hoodie",
        code: "Hodie-B",
        color: "Blue",
        size: "M",
        price: 17.99,
        note: "Note, 1 piece"
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
        name: "White Hoodie",
        code: "Hodie-W",
        color: "White",
        size: "M",
        price: 35.99
      }
  ]; // Add appropriate type
  @Input() totalOrder: number = 0;


  handleLess(id: number) {
    // Handle the 'Less' event for the item with the given id
    console.log(`Handle 'Less' event for item with id: ${id}`);
  }

  handlePluss(id: number) {
    // Handle the 'Pluss' event for the item with the given id
    console.log(`Handle 'Pluss' event for item with id: ${id}`);
  }

  handleRemove(id: number) {
    // Handle the 'Remove' event for the item with the given id
    console.log(`Handle 'Remove' event for item with id: ${id}`);
  }

  handleFavorite(id: number) {
    // Handle the 'Favorite' event for the item with the given id
    console.log(`Handle 'Favorite' event for item with id: ${id}`);
  }
}
