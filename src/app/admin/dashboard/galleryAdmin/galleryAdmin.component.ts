import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-galleryAdmin',
  templateUrl: './galleryAdmin.component.html',
  styleUrls: ['./galleryAdmin.component.scss']
})
export class GalleryAdminComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private alertifyService : AlertifyService,
    private http : HttpClient
  ) { }

  path =  "https://localhost:44308/api/admin/";
  gallery : Gallery[]

  ngOnInit() {
    this.adminService.getPhotos().subscribe(data => {
      this.gallery = data;
      this.gallery.reverse();
      console.log(data);
    })
  }

  deletePhoto(photoId : number) {
    if(confirm("Fotoğrafı silmek istediğinize emin misiniz")) {
      return this.http.delete(this.path + "gallery/delete/"+ photoId).toPromise().then(()=> {
        this.adminService.getPhotos().subscribe(data => {
          this.gallery = data;
          this.gallery.reverse();
          this.alertifyService.error("Fotoğrafı başarıyla sildiniz");
        })
      })
    }
  }

}
