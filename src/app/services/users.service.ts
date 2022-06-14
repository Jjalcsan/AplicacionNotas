import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  cargarUsers(): Observable<Users> {

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Users>(`http://localhost:8000/categories`, { headers });

  }
}
