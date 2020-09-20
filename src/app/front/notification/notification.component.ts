import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  notifications : Notification[] = [];

  path = "https://localhost:44308/api/home/";

  ngOnInit() {
    this.getAnnouncements().subscribe(data => {
      this.notifications = data;
    })
  }
  
  getAnnouncements() {
    return this.http.get<Notification[]>(this.path + "notification")
  }

}
