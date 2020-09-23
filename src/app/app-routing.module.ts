import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './front/about/about.component';
import { AchievementComponent } from './front/achievement/achievement.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { TeamsComponent } from './front/teams/teams.component';
import { SignInComponent } from './login/signIn/signIn.component';

const routes: Routes = [
  {
    path : '',redirectTo:'/front/about',pathMatch :'full'
  },
  {
    path : 'front',component:NavbarComponent,children : [
      {path : "teams",component:TeamsComponent},
      {path : "about",component:AboutComponent},
      {path : "achievements",component : AchievementComponent}
    ]
  },
  {
    path : 'admin',component : DashboardComponent,children:[]
  },
  {
    path : 'login',component : SignInComponent,children:[]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
