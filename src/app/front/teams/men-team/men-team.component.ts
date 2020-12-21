import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-men-team',
  templateUrl: './men-team.component.html',
  styleUrls: ['./men-team.component.scss']
})
export class MenTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]

  ngOnInit() {
    this.userService.getMenTeam().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }

}
