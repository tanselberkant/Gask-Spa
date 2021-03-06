import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { Notification } from 'src/app/models/notification'

@Component({
  selector: 'app-notifAdmin',
  templateUrl: './notifAdmin.component.html',
  styleUrls: ['./notifAdmin.component.scss']
})
export class NotifAdminComponent implements OnInit {

  constructor(
    private userService: UserService,
    private http : HttpClient,
    private router : Router,
    private alertifyService : AlertifyService
  ) { }


  path = "https://localhost:44308/api/admin/";

  notifications : Notification[]

  ngOnInit() {
    this.userService.getNotifications().subscribe(data => {
      this.notifications = data;
      this.notifications.reverse();
      console.log(data);
    })
  }

  deleteNotification(notificationId : number) {
    if(confirm("Duyuruyu Silmek İstediğinize Emin misiniz ?")) {
      return this.http.delete(this.path + "notification/delete/" + notificationId).toPromise().then(() => {
        this.userService.getNotifications().subscribe(data => {
          this.notifications = data;
          this.notifications.reverse();
          this.alertifyService.error("Duyuru başarıyla Silindi!")
        })
      })
    }
  }

}
