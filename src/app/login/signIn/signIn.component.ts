import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private router : Router,private http:HttpClient
  ) { }

  ngOnInit() {
  }

  invalidLogin : boolean;

  login(form : NgForm) {
    const credentials = {
      'username' : form.value.username,
      'password' : form.value.password
    }

    this.http.post("https://localhost:44308/api/auth/login",credentials)
    .subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false; 
      this.router.navigate(['/admin']);
    },err => {
      this.invalidLogin = true;
    })
  }



}
