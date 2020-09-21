import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { About } from '../models/about';
import { Achievement } from '../models/achievement';
import { Contact } from '../models/contact';
import { Notification } from '../models/notification';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router : Router,
    private http:HttpClient
  ) { }

  path = "https://localhost:44308/api/home/";

  getAbout():Observable<About[]>{
    return this.http.get<About[]>(this.path + "about");
  }

  getNotifications():Observable<Notification[]>{
    return this.http.get<Notification[]>(this.path + "notification");
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

}
