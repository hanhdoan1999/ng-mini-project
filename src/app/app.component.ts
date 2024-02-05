// app.component.ts
import { Component } from '@angular/core';
import { SharedModule } from "./shared/shared.module";
import { CartModule } from "./cart/cart.module";
import { AuthModule } from "./auth/auth.module";
import { HeaderComponent } from "./shared/components/header/header.component";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ConfirmationService,MessageService]
})

export class AppComponent {

}
