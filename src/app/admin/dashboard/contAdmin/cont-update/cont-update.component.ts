import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-cont-update',
  templateUrl: './cont-update.component.html',
  styleUrls: ['./cont-update.component.scss']
})
export class ContUpdateComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private http : HttpClient,
    private router : Router
  ) { }



  ngOnInit() {
  
  }

}
