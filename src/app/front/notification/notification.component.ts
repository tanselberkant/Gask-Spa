import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/notification';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }

  notifications : Notification[]

  
  ngOnInit() {
    this.userService.getNotifications().subscribe(data =>  {
      this.notifications = data
      this.notifications.reverse()
      this.notifications = this.notifications.slice(0,5)    
    })
  }
}
