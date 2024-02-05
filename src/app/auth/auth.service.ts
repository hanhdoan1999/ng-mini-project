import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Route, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { apiUrl } from "../shared/api/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  // registerUser(newUser: User) : Observable<User>
  // {
  //   newUser.id = '';
  //   return this.http.post<User>(this.apiUrl + '/api/User/register', newUser);
  // }

  login (username: string, password: string): Observable<any> {
    return this.http.post(apiUrl + 'auth/login', { username, password });
  }

  logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLogin");
    this.router.navigate(['login'])
  }

  public isAuthenticated() : boolean {
    const token = localStorage.getItem('authToken');
    // const helper = new JwtHelperService();
    // const isExpired = helper.isTokenExpired(token);
    // return !isExpired;
    return  token !== null;
  }
}
