// amount-store.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amount-store',
  template: `
    <div class="store-item mt-2">
      <!-- Your HTML content here -->
    </div>
  `,
  styleUrls: ['./amount-store.component.css']
})
export class AmountStoreComponent {
  @Input() totalOrder: number = 0;
  // Add other input properties as needed
}
