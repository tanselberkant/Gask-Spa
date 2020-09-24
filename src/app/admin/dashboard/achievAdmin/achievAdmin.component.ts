import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/models/achievement';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-achievAdmin',
  templateUrl: './achievAdmin.component.html',
  styleUrls: ['./achievAdmin.component.scss']
})
export class AchievAdminComponent implements OnInit {

  constructor(
    private userService : UserService,
    
  ) { }

  // we gonna list Achievement in this component

  achievements : Achievement[]


  ngOnInit() {
    this.userService.getAchievements().subscribe(data => {
      this.achievements = data;
      console.log(data);
    })
  }

}
