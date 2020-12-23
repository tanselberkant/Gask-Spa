import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-junior-team',
  templateUrl: './junior-team.component.html',
  styleUrls: ['./junior-team.component.scss']
})
export class JuniorTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]
  
  ngOnInit() {
    this.userService.getJuniorPlayers().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }

}
