import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-youngA-team',
  templateUrl: './youngA-team.component.html',
  styleUrls: ['./youngA-team.component.scss']
})
export class YoungATeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

    players : Player[]

  ngOnInit() {
    this.userService.getYoungAPlayers().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }
}
