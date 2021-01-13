import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { Inbox } from 'src/app/models/inbox';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private userService : UserService,
    private formBuilder : FormBuilder,
    private http : HttpClient
  ) { }

  contacts : Contact[]   
  contactAddForm : FormGroup
  ngOnInit() {
    this.userService.getContact().subscribe(data => {
      this.contacts = data;     
    })
    this.createContactForm();
  }

  createContactForm() {
    this.contactAddForm = this.formBuilder.group({
      senderMail : ["",Validators.required],
      senderFullName : ["",Validators.required],
      senderPhone : ["",Validators.required],
      message : ["",Validators.required]
    })
  }

  mails : Inbox[]
  
  sendMail(e : Event) {
   if(this.contactAddForm.valid) {
       this.mails = Object.assign({},this.contactAddForm.value)
     this.userService.sendMessage(this.mails);
      
     emailjs.sendForm('service_tlx1qyr','template_80eltke',e.target as HTMLFormElement, 'user_GBzQllDVvzvCx7nsCW9dO')
    .then((result : EmailJSResponseStatus) => {
       console.log(result.text);
       },(error) => {
         console.log(error.text);
       })                   
       
       this.contactAddForm.reset();
      //  this.reloadPage();
     }
   }
  
  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    },300)
  }
}
