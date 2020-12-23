import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seniorMen-team',
  templateUrl: './seniorMen-team.component.html',
  styleUrls: ['./seniorMen-team.component.scss']
})
export class SeniorMenTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]
  
  ngOnInit() {
    this.userService.getSeniorMen().subscribe(data => {
      this.players = data;
      console.log(data)
    })
  }

}
