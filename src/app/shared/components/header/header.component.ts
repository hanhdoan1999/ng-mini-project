import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { AuthService } from '../../../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.items = [
      // { label: 'Admin', icon: 'pi pi-fw pi-home' },
      { label: 'My Account', icon: 'pi pi-users' },
      { label: 'Books', icon: 'pi pi-book' },
      { label: 'Cart', icon: 'pi pi-shopping-cart' },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        style: { 'margin-left': 'auto' },
      },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: any) {
    switch (event.label) {
      case 'Logout':
        this.authService.logout();
        break;
      case 'Cart':
        this.router.navigate(['/cart']);
        break;
      case 'Books':
      case 'My Account':
        this.router.navigate(['/list-book']);
        break;
      default:
        break;
    }
    this.activeItem = event;
  }

  isLoggedIn(): boolean {
    const isLogin = localStorage.getItem("isLogin");
    return isLogin === "true";
  }

  activateLast() {
    this.activeItem = (this.items as MenuItem[])[
      (this.items as MenuItem[]).length - 1
    ];
  }
}
