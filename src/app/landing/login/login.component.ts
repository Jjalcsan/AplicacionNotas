import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  navigateToInicio(){
    this.router.navigateByUrl("categorias")
  }

  // Your web app's Firebase configuration

  firebaseConfig = {

  apiKey: "AIzaSyC94XctSD_2xBf4KePns6PpaRXMtesHbV4",

  authDomain: "aplicacionnotas-820d6.firebaseapp.com",

  projectId: "aplicacionnotas-820d6",

  storageBucket: "aplicacionnotas-820d6.appspot.com",

  messagingSenderId: "339285160111",

  appId: "1:339285160111:web:6cb2d4d3500d9cfa84245a"

  };

  // Initialize Firebase

  app = initializeApp(this.firebaseConfig)
}
