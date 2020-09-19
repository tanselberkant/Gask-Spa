import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { TeamsComponent } from './front/teams/teams.component';

const routes: Routes = [
  {
    path : '',redirectTo:'/front',pathMatch :'full'
  },
  {
    path : 'front',component:NavbarComponent,children : [
      {path : "teams",component:TeamsComponent}
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
