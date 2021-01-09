import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  gallery : Gallery[]
  
  ngOnInit() {
    this.userService.getPhotos().subscribe(data => {
      this.gallery = data;
      console.log(data);
    })
  }
}
