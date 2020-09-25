import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievAddComponent } from './admin/dashboard/achievAdmin/achiev-add/achiev-add.component';
import { AchievAdminComponent } from './admin/dashboard/achievAdmin/achievAdmin.component';
import { ContAddComponent } from './admin/dashboard/contAdmin/cont-add/cont-add.component';
import { ContUpdateComponent } from './admin/dashboard/contAdmin/cont-update/cont-update.component';
import { ContAdminComponent } from './admin/dashboard/contAdmin/contAdmin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './front/about/about.component';
import { AchievementComponent } from './front/achievement/achievement.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { TeamsComponent } from './front/teams/teams.component';
import { SignInComponent } from './login/signIn/signIn.component';
import { AuthGuardService } from './services/authGuard.service';

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
    path : 'admin',component : DashboardComponent,canActivate:[AuthGuardService],children:[
      {path : "achievs",component : AchievAdminComponent},
      {path : "achievs/achievadd",component : AchievAddComponent},
      {path : "contacts",component : ContAdminComponent},
      {path : "contacts/contactadd",component : ContAddComponent},
      {path : "contacts/contactupdate/:id",component : ContUpdateComponent}
    ]
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
