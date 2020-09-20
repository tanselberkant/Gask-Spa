import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private http : HttpClient,
  ) { }
  path = "https://localhost:44308/api/home/";
  about : About[]=[];


  ngOnInit(){
    this.getAboutContent().subscribe(data => {
      this.about = data;
    })
  }

  getAboutContent(){
    return this.http.get<About[]>(this.path + "about")
  }
  

}
