import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private jwtHelper : JwtHelperService
  ) { }

  ngOnInit(): void {
  }


  isUserAuthenticated() {
   
    const token : string = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)) {
      return true
    }
    else {
      return false
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

}
