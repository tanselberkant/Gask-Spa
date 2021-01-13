import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  teams : Team[]

  ngOnInit(){
    this.userService.getTeams().subscribe(data => {
      this.teams = data;    
    })
  }

}
