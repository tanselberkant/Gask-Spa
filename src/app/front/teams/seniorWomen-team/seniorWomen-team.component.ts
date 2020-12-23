import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seniorWomen-team',
  templateUrl: './seniorWomen-team.component.html',
  styleUrls: ['./seniorWomen-team.component.scss']
})
export class SeniorWomenTeamComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  players : Player[]

  ngOnInit() {
    this.userService.getSeniorWomen().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }

}
