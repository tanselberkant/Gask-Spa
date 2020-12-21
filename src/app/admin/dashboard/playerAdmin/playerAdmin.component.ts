import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-playerAdmin',
  templateUrl: './playerAdmin.component.html',
  styleUrls: ['./playerAdmin.component.scss']
})
export class PlayerAdminComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private alertifyService : AlertifyService,
    private http : HttpClient
  ) { }

  path = "https://localhost:44308/api/admin/";
  players : Player[]

  ngOnInit() {
    this.adminService.getAllPlayer().subscribe(data => {
      this.players = data;
      console.log(data);
    })
  }

  deletePlayer(playerId : number) {
    if(confirm("Oyuncuyu silmek istediğinize emin misiniz?")) {
      return this.http.delete(this.path + "player/delete/" + playerId).toPromise().then(() => {
        this.adminService.getAllPlayer().subscribe(data => {
          this.players = data;
          this.alertifyService.error("Oyuncuyu başarıyla sildiniz!");
        })
      })
    }
  }

}
