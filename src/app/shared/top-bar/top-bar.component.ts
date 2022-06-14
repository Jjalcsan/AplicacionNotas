import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>; 

  constructor(private authService : AuthService, public router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("")
  }

  

}
