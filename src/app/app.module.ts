import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from '@angular/common'
import { JwtModule } from '@auth0/angular-jwt';


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
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AchievAdminComponent } from './admin/dashboard/achievAdmin/achievAdmin.component';
import { AlertifyService } from './services/alertify.service';
import { AchievAddComponent } from './admin/dashboard/achievAdmin/achiev-add/achiev-add.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

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
    SignInComponent,
    AchievAdminComponent,
    AchievAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : tokenGetter,
        allowedDomains : ["localhost:44308"],
        disallowedRoutes : []
      }
    })
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
