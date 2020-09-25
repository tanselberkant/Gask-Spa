import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from 'src/app/models/achievement';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-achievAdmin',
  templateUrl: './achievAdmin.component.html',
  styleUrls: ['./achievAdmin.component.scss']
})
export class AchievAdminComponent implements OnInit {

  constructor(
    private userService : UserService,
    private http : HttpClient,
    private router : Router,
    private alertifyService : AlertifyService
  ) { }


  path = "https://localhost:44308/api/admin/";
  achievements : Achievement[]
  
  ngOnInit() {
    this.userService.getAchievements().subscribe(data => {
      this.achievements = data;
      console.log(data);
    })
  }

  deleteAchievement(achievementId : number) {
    if(confirm("Silmek istediğinize emin misiniz?")) {
      return this.http.delete(this.path + "achievement/delete/" +achievementId).toPromise().then(() => {
        this.userService.getAchievements().subscribe(data => {
          this.achievements = data;
          this.alertifyService.error("Başarıyı sildiniz !");
        })
      })
    }
  }  
}




