import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }

  contacts : Contact[]


  ngOnInit() {
    this.userService.getContact().subscribe(data => {
      this.contacts = data;
      console.log(data);
    })
  }

}
