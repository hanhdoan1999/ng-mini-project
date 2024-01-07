import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Route, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'https://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  // registerUser(newUser: User) : Observable<User>
  // {
  //   newUser.id = '';
  //   return this.http.post<User>(this.apiUrl + '/api/User/register', newUser);
  // }

  login (username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/api/User/login', { username, password });
  }

  logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    this.router.navigate(['login'])
  }

  public isAuthenticated() : boolean {
    const token = localStorage.getItem('authToken');
    // const helper = new JwtHelperService();
    // const isExpired = helper.isTokenExpired(token);
    // return !isExpired;
    return token !== "";
  }
}
