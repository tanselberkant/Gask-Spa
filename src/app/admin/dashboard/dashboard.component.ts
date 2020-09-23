import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isUserAuthenticated() {
   
    const token : string = localStorage.getItem("jwt");
    if(token) {
      return true
    }
    else {
      return false
    }
  }


}
