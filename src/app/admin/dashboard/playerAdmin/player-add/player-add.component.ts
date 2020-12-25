import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  imageUrl : string = "/src/assets/images/upload-image.jpg";
  fileToUpload : File = null;

  constructor(
    private adminService : AdminService
  ) {}
  ngOnInit() {

  }

  handleFileInput(file : FileList) {
    this.fileToUpload = file.item(0);

    //show image preview
    var reader = new FileReader();
    reader.onload = (event : any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  OnSubmit(firstName,lastName,teamId,stickSide,teamRole,imageName,imageFile) {
     this.adminService.addPlayer(firstName.value,lastName.value,teamId.value,stickSide.value,teamRole.value,imageName.value,this.fileToUpload).subscribe(data => {
       console.log('done')
       firstName.value = null;
       lastName.value = null;
       teamId.value = null;
       stickSide.value = null;
       teamRole.value = null;
       imageFile = null;
       imageName.value = null;
       this.imageUrl = "/src/assets/images/upload-image.jpg";
     })
  }


  // constructor(
  //   private adminService : AdminService,
  //   private formBuilder : FormBuilder
  // ) { }

  // player : Player;
  // playerAddForm : FormGroup

  // createPlayerAddForm() {
  //   this.playerAddForm = this.formBuilder.group({
  //     firstName : ["",Validators.required],
  //     lastName : ["",Validators.required],
  //     teamId : ["",Validators.required],
  //     teamRole : ["",Validators.required],
  //     stickSide : ["",Validators.required]
  //   })
  // }

  // ngOnInit() {
  //   this.createPlayerAddForm();
  // }

  // add() {
  //   if(this.playerAddForm.valid) {
  //     this.player = Object.assign({},this.playerAddForm.value)
  //     this.adminService.addPlayer(this.player)
  //   }
  // }
}
