import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contAdmin',
  templateUrl: './contAdmin.component.html',
  styleUrls: ['./contAdmin.component.scss']
})
export class ContAdminComponent implements OnInit {

  constructor(
    private userService : UserService,
    private http : HttpClient,
    private router : Router,
    private alertifyService : AlertifyService
  ) { }

  contacts : Contact[]
  path = "https://localhost:44308/api/admin/";

  ngOnInit() {
    this.userService.getContact().subscribe(data => {
      this.contacts = data;
    })
  }

  deleteContact(contactId : number) {
    if(confirm("Silmek istediğinize emin misiniz")) {
      return this.http.delete(this.path + "contact/delete/"+contactId).toPromise().then(() => {
        this.userService.getContact().subscribe(data => {
          this.contacts = data;
          this.alertifyService.error("İletişim Adresini Sildiniz");
        })
      })
    }
  }

}
