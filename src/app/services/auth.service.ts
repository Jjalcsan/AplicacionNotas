import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  toggleLogin() {
    this.loggedIn.next(true);
  }

  login(user: any): Observable<any> {
    
    return this.http.post("http://localhost:8000/auth/login", user)
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.setItem("token", "null");
  }

  register(user:any): Observable<any> {
    return this.http.post("http://localhost:8000/auth/register", user)
  }

  setToken(token: string){
    localStorage.setItem("token", token);
  }

  getToken() {
    let token = localStorage.getItem("token");
    if(token!="null"){
      return true;
    } else {
      return false;
    }
  }

}
