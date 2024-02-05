// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";
import { AuthGuard } from "./auth/auth.guard";
import { CartComponent } from "./cart/cart/cart.component";
import { ListAdminComponent } from "./admin/list-admin/list-admin.component";
import { MyProfileComponent } from "./profile/my-profile/my-profile.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'list-book', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: ListAdminComponent, canActivate: [AuthGuard] },
  {
    path: 'list-book/:id',
    component: BookDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
