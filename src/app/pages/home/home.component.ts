import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";
import { TabMenuModule } from 'primeng/tabmenu';
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TabMenuModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  constructor( private authService: AuthService) {}

  ngOnInit() {
      this.items = [
          { label: 'Admin', icon: 'pi pi-fw pi-home' },
          { label: 'User', icon: 'pi pi-users' }, 
          { label: 'Books', icon: 'pi pi-book' },
          { label: 'Cart', icon: 'pi pi-shopping-cart' },
          { label: 'Logout', icon: 'pi pi-sign-out', style: {'margin-left': 'auto'} }
      ];

      this.activeItem = this.items[0];
  }

  onActiveItemChange(event: any) {
    if(event.label === "Logout") {
      this.authService.logout();
    }
     this.activeItem = event;
  }

  activateLast() {
      this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
  }
}
