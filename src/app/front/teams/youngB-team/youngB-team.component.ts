import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-youngB-team',
  templateUrl: './youngB-team.component.html',
  styleUrls: ['./youngB-team.component.scss']
})
export class YoungBTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]

  ngOnInit() {
    this.userService.getYoungBPlayers().subscribe( data => {
      this.players = data;
    })
  }
}
