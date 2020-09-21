import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private userService : UserService   
  ) { }
 
  about : About[]


  ngOnInit(){
    this.userService.getAbout().subscribe(data => {
      this.about = data;
      console.log(data);
    })
  }
}
