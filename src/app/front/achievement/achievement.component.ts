import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/models/achievement';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  achievements : Achievement[]

  ngOnInit() {
    this.userService.getAchievements().subscribe(data => {
      this.achievements = data;
      console.log(data);
    })
  }

}
