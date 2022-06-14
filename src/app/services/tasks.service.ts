import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories, Categorie, Task } from '../interfaces/tareas';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http : HttpClient) { }

  cargarCategorias(): Observable<Categories> {

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get<Categories>(`http://localhost:8000/categories`, { headers });

  }
}
