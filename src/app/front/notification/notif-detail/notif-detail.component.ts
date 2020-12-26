import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from 'src/app/models/notification';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notif-detail',
  templateUrl: './notif-detail.component.html',
  styleUrls: ['./notif-detail.component.scss']
})
export class NotifDetailComponent implements OnInit {

  constructor(
    private activadedRoute : ActivatedRoute,
    private userService : UserService
  ) { }

  notification : Notification;

  ngOnInit() {
    this.activadedRoute.params.subscribe(params => {
      this.getNotifById(params["notifId"]);
    })
  }

  getNotifById(notifId) {
    this.userService.getNotificationById(notifId).subscribe(data => {
      this.notification = data;      
    })
  }


}
