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

  constructor(
    private adminService : AdminService,
    private formBuilder : FormBuilder
  ) { }

  player : Player;
  playerAddForm : FormGroup

  createPlayerAddForm() {
    this.playerAddForm = this.formBuilder.group({
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      teamId : ["",Validators.required],
      teamRole : ["",Validators.required],
      stickSide : ["",Validators.required]
    })
  }

  ngOnInit() {
    this.createPlayerAddForm();
  }

  add() {
    if(this.playerAddForm.valid) {
      this.player = Object.assign({},this.playerAddForm.value)
      this.adminService.addPlayer(this.player)
    }
  }
}
