import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-women-team',
  templateUrl: './women-team.component.html',
  styleUrls: ['./women-team.component.scss']
})
export class WomenTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]
  
  ngOnInit() {
    this.userService.getWomenTeam().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }

}
