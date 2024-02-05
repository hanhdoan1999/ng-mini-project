import { CommonModule } from "@angular/common";
import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule ],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css',
})
export class BookAddComponent {
  @Input()  visible : boolean = false
}
