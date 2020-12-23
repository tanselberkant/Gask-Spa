import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-national-team',
  templateUrl: './national-team.component.html',
  styleUrls: ['./national-team.component.scss']
})
export class NationalTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]
  
  ngOnInit() {
    this.userService.getNationalPlayers().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }
}
