import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { NotificationComponent } from './front/notification/notification.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TeamsComponent } from './front/teams/teams.component';
import { AboutComponent } from './front/about/about.component';
import { ContactComponent } from './front/contact/contact.component';
import { AchievementComponent } from './front/achievement/achievement.component';
import { SignInComponent } from './login/signIn/signIn.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationComponent,
    DashboardComponent,    
    TeamsComponent,
    AboutComponent,
    ContactComponent,
    AchievementComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
