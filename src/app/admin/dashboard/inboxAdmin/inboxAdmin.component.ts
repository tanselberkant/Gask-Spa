import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inbox } from 'src/app/models/inbox';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-inboxAdmin',
  templateUrl: './inboxAdmin.component.html',
  styleUrls: ['./inboxAdmin.component.scss']
})
export class InboxAdminComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private alertifyService : AlertifyService,
    private http : HttpClient
  ) { }

    mails : Inbox[]
    path = "https://localhost:44308/api/admin/";


  ngOnInit() {
    this.adminService.getMails().subscribe(data => {
      this.mails = data;
      this.mails.reverse();
      console.log(data);
    })
  }

  deleteMail(inboxId : number) {
    if(confirm("Gelen Mesajı Silmek İstediğiniz Emin Misiniz?")) {
      return this.http.delete(this.path + "inbox/delete/" + inboxId).toPromise().then(() => {
        this.adminService.getMails().subscribe(data => {
          this.mails = data;
          this.mails.reverse();
          this.alertifyService.error("Mesajı başarıyla Sildiniz!")
        })
      })
    }
  }

}
