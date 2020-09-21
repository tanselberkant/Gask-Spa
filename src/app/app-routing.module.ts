import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './front/about/about.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { TeamsComponent } from './front/teams/teams.component';

const routes: Routes = [
  {
    path : '',redirectTo:'/front/about',pathMatch :'full'
  },
  {
    path : 'front',component:NavbarComponent,children : [
      {path : "teams",component:TeamsComponent},
      {path : "about",component:AboutComponent}
    ]
  },
  {
    path : 'admin',component : DashboardComponent,children:[]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
