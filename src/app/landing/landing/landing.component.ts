import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  email!: string;
  name!: string;
  content!: string; 

  emailstring= `mailto:jjalcsan@gmail.com?Subject= ${this.email} %0D ${this.name}  %0D ${this.content}`;

  constructor(public router : Router) { }

  ngOnInit() {
  }

  

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }

}
