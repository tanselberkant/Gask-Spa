import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { NotificationComponent } from './front/notification/notification.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { TeamsComponent } from './front/teams/teams.component';
import { AboutComponent } from './front/about/about.component';
import { ContactComponent } from './front/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationComponent,
    DashboardComponent,
    LoginComponent,
    TeamsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
