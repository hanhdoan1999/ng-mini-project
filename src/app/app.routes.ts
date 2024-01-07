import { Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { BookListComponent } from "./books/book-list/book-list.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path : "books",component : BookListComponent,
    canActivate: [AuthGuard] 
  },
  {path: "login", component:LoginComponent},
  { path : "home",component : HomeComponent,
    canActivate: [AuthGuard] 
  },
];
