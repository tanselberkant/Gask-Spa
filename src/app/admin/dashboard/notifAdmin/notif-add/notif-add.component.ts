import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Notification } from 'src/app/models/notification'

@Component({
  selector: 'app-notif-add',
  templateUrl: './notif-add.component.html',
  styleUrls: ['./notif-add.component.scss']
})
export class NotifAddComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private formBuilder : FormBuilder
  ) { }

  notification : Notification;
  notificationAddForm : FormGroup;


  createNotificationForm() {
    this.notificationAddForm = this.formBuilder.group({
      notificationContent : ["",Validators.required],
    })
  }

  ngOnInit() {
    this.createNotificationForm();
  }

  add() {
    if(this.notificationAddForm.valid) {
      this.notification = Object.assign({},this.notificationAddForm.value)
      this.adminService.addNotification(this.notification)
    }
  }

}
