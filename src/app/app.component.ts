import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from "./auth/auth.module";
import { BooksModule } from "./books/books.module";
import { CartModule } from "./cart/cart.module";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SharedModule } from "./shared/shared.module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterOutlet, 
    SharedModule,
    BooksModule,
    CartModule,
    AuthModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-mini-project';
}
