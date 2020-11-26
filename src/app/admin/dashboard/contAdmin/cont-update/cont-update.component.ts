import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/app/models/contact';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-cont-update',
  templateUrl: './cont-update.component.html',
  styleUrls: ['./cont-update.component.scss']
})
export class ContUpdateComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private http : HttpClient,
    private router : Router,
    private alertifyService : AlertifyService
  ) { }

  contact : Contact
  path = "https://localhost:44308/api/admin/";

  ngOnInit() {
    this.http.get(this.path + "contact/")
  }


}
