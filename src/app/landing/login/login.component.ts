import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: UserModel

  email!: string;
  password!: string;

  constructor(public router : Router, public authService : AuthService) { }

  ngOnInit(): void {
  }

  realizarLogin(){
    const user = {email: this.email, password: this.password};
    this.authService.login(user).subscribe( data => {
      console.log(data.access_token);
      this.authService.setToken(data.access_token);
      this.authService.toggleLogin();
      this.router.navigateByUrl("categorias");

    })
  }

}
