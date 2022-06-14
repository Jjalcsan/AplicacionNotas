import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Categories, Category } from 'src/app/interfaces/tareas';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categories[] = [];

  constructor(private router : Router, private http : HttpClient, private tasks : TasksService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  navigateToCategoria(){
    this.router.navigateByUrl("categoria")
  }

  cargarCategorias() {
    this.tasks.cargarCategorias()
    .subscribe(resp => {//this.categorias = resp;
       console.log(resp);}
    ,error => {console.log(error);})
  }
}
