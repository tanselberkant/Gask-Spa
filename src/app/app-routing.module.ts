import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievAddComponent } from './admin/dashboard/achievAdmin/achiev-add/achiev-add.component';
import { AchievAdminComponent } from './admin/dashboard/achievAdmin/achievAdmin.component';
import { ContAddComponent } from './admin/dashboard/contAdmin/cont-add/cont-add.component';
import { ContUpdateComponent } from './admin/dashboard/contAdmin/cont-update/cont-update.component';
import { ContAdminComponent } from './admin/dashboard/contAdmin/contAdmin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GalleryAddComponent } from './admin/dashboard/galleryAdmin/galleryAdd/galleryAdd.component';
import { GalleryAdminComponent } from './admin/dashboard/galleryAdmin/galleryAdmin.component';
import { InboxAdminComponent } from './admin/dashboard/inboxAdmin/inboxAdmin.component';
import { NotifAddComponent } from './admin/dashboard/notifAdmin/notif-add/notif-add.component';
import { NotifAdminComponent } from './admin/dashboard/notifAdmin/notifAdmin.component';
import { PlayerAddComponent } from './admin/dashboard/playerAdmin/player-add/player-add.component';
import { PlayerAdminComponent } from './admin/dashboard/playerAdmin/playerAdmin.component';
import { AboutComponent } from './front/about/about.component';
import { AchievementComponent } from './front/achievement/achievement.component';
import { GalleryComponent } from './front/gallery/gallery.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { NotifDetailComponent } from './front/notification/notif-detail/notif-detail.component';
import { JuniorTeamComponent } from './front/teams/junior-team/junior-team.component';
import { MenTeamComponent } from './front/teams/men-team/men-team.component';
import { NationalTeamComponent } from './front/teams/national-team/national-team.component';
import { SeniorMenTeamComponent } from './front/teams/seniorMen-team/seniorMen-team.component';
import { SeniorWomenTeamComponent } from './front/teams/seniorWomen-team/seniorWomen-team.component';
import { TeamsComponent } from './front/teams/teams.component';
import { WomenTeamComponent } from './front/teams/women-team/women-team.component';
import { YoungATeamComponent } from './front/teams/youngA-team/youngA-team.component';
import { YoungBTeamComponent } from './front/teams/youngB-team/youngB-team.component';
import { SignInComponent } from './login/signIn/signIn.component';
import { AuthGuardService } from './services/authGuard.service';

const routes: Routes = [
  {
    path : '',redirectTo:'/front/about',pathMatch :'full'
  },
  {
    path : 'front',component:NavbarComponent,children : [
      {path : "teams",component:TeamsComponent},
      {path : "teams/1",component : JuniorTeamComponent},
      {path : "teams/2",component : YoungBTeamComponent},
      {path : "teams/3",component : YoungATeamComponent},
      {path : "teams/4",component : SeniorMenTeamComponent},
      {path : "teams/5",component : SeniorWomenTeamComponent},
      {path : "teams/6",component : WomenTeamComponent},
      {path : "teams/7",component : MenTeamComponent},
      {path : "teams/8",component : NationalTeamComponent},
      {path : "about",component:AboutComponent},
      {path : "achievements",component : AchievementComponent},
      {path : "notification/:notifId",component : NotifDetailComponent},
      {path : "gallery",component : GalleryComponent}
    ]
  },
  {
    path : 'admin',component : DashboardComponent,canActivate:[AuthGuardService],children:[
      {path : "achievs",component : AchievAdminComponent},
      {path : "achievs/achievadd",component : AchievAddComponent},
      {path : "contacts",component : ContAdminComponent},
      {path : "contacts/contactadd",component : ContAddComponent},
      {path : "contacts/contactupdate/:id",component : ContUpdateComponent},
      {path : "notifs",component : NotifAdminComponent},
      {path : "notifs/notifsadd", component : NotifAddComponent},
      {path : "inbox",component : InboxAdminComponent },
      {path : "players",component : PlayerAdminComponent},
      {path : "players/playeradd",component : PlayerAddComponent},
      {path : "myphotos",component: GalleryAdminComponent},
      {path : "myphotos/photoadd",component: GalleryAddComponent}
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
