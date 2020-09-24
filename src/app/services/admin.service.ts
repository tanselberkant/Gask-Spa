import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http : HttpClient,
    private router : Router,
    private alertifyService : AlertifyService    
  ) { }

  path = "https://localhost:44308/api/admin/";

  addAchievement(achievement) {
    this.http.post(this.path + 'achievement/add',achievement).subscribe(data => {
      this.alertifyService.success("Başarı Başarıyla eklendi!");
      this.router.navigate(['/admin/achievs']);
    })
  }

  // deleteAchievement(achievementId) {
  //   return this.http.delete(this.path + "achievement/delete/" +achievementId)
  // }

  

}
