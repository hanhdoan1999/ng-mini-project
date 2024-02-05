import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { apiUrl } from "../shared/api/api";
import { Admin } from "./shared/models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllAdmin(): Observable<any> {
      return this.http.get(apiUrl + 'users');
  }

  createAdmin(req:Admin): Observable<any> {
    return this.http.post(apiUrl + 'users', req);
  }

  editAdmin(id:string | number, req:Admin): Observable<any> {
    return this.http.put(apiUrl + 'users/' +  `${id}`, req);
  }

  deleteAdmin(id:string | number): Observable<any> {
    return this.http.delete(apiUrl + 'users/' +  `${id}`);
  }

}
