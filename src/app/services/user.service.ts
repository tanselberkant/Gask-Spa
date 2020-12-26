import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { About } from '../models/about';
import { Achievement } from '../models/achievement';
import { Contact } from '../models/contact';
import { Inbox } from '../models/inbox';
import { Notification } from '../models/notification';
import { Player } from '../models/player';
import { Team } from '../models/team';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router : Router,
    private http:HttpClient,
    private alertifyService : AlertifyService
  ) { }

  path = "https://localhost:44308/api/home/";

  getAbout():Observable<About[]>{
    return this.http.get<About[]>(this.path + "about");
  }

  getNotifications():Observable<Notification[]>{
    return this.http.get<Notification[]>(this.path + "notifications");
  }

  getNotificationById(notifId):Observable<Notification> {
    return this.http.get<Notification>(this.path + "notification/?id="+notifId);
  }

  getAchievements():Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.path + "achievement");
  }

  getContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.path + "contact");
  }

  getTeams():Observable<Team[]>{
    return this.http.get<Team[]>(this.path + "team");
  }

  sendMessage(inbox) {
    this.http.post(this.path + 'inbox/add', inbox).subscribe(data => {      
      this.alertifyService.success("Mesajınızı Başarıyla Gönderdiniz");      
      // this.reloadPage();
    })
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    },200)
  }

  getJuniorPlayers():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/1");
  }

  getYoungBPlayers():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/2");
  }

  getYoungAPlayers():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/3");
  }

  getSeniorMen():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/4");
  }

  getSeniorWomen():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/5");
  }

  getWomenTeam():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/6");
  }

  getMenTeam():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/7");
  }

  getNationalPlayers():Observable<Player[]> {
    return this.http.get<Player[]>(this.path + "team/8");
  }


}

