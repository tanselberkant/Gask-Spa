import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inbox } from '../models/inbox';
import { Player } from '../models/player';
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

  // addPlayer(player) {
  //   this.http.post(this.path + 'player/add',player).subscribe(data => {
  //     this.alertifyService.success("Oyuncu Başarıyla eklendi!");
  //     this.router.navigate(['/admin/players']);
  //   }) 
  // }

  addPlayer(firstName,lastName,teamId,stickSide,teamRole,imageName,imageFile : File) {  
    const formData : FormData = new FormData();
    formData.append('ImageFile',imageFile,imageFile.name);
    formData.append('FirstName',firstName);
    formData.append('LastName',lastName);
    formData.append('TeamId',teamId);
    formData.append('StickSide',stickSide);
    formData.append('TeamRole',teamRole);
    formData.append('ImageName',imageName)

    return this.http.post(this.path + 'player/add',formData);
  }

  addContact(contact) {
    this.http.post(this.path + 'contact/add',contact ).subscribe(data => {
      this.alertifyService.success("İletişim Adresi Başarı ile eklendi");
      this.router.navigate(['/admin/contacts']);
    })
  }

  updateContact(contactId) {
    this.http.put(this.path + 'contact/update/', contactId).subscribe(data => {
      this.alertifyService.success("İletişim Adresi başarı ile Güncellendi");
      this.router.navigate(['/admin/contacts']);
    })
  }

  addNotification(notification) {
    this.http.post(this.path + 'notification/add',notification).subscribe(data => {
      this.alertifyService.success("Duyuru başarıyla eklendi");
      this.router.navigate(['admin/notifs']);
    })
  }

  getMails():Observable<Inbox[]> {
    return this.http.get<Inbox[]>(this.path + "inbox")
  }

  getAllPlayer():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "players")
  }

}
