// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div class="card"><ng-content></ng-content></div>',
  styleUrls: ['./card.component.css']
})
export class CardComponent { }
