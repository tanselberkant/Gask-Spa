import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-cont-add',
  templateUrl: './cont-add.component.html',
  styleUrls: ['./cont-add.component.scss']
})
export class ContAddComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private formBuilder : FormBuilder
  ) { }

  contact : Contact;
  contactAddForm : FormGroup;

  createContactForm() {
    this.contactAddForm = this.formBuilder.group({
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      email : ["",Validators.required],
      phone : ["",Validators.required]
    })
  }


  ngOnInit() {

    this.createContactForm();
  }

  add() {
    if(this.contactAddForm.valid) {
      this.contact = Object.assign({},this.contactAddForm.value)
      this.adminService.addContact(this.contact)
    }
  }


}
