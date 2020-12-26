import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-galleryAdd',
  templateUrl: './galleryAdd.component.html',
  styleUrls: ['./galleryAdd.component.scss']
})
export class GalleryAddComponent implements OnInit {

  imgageUrl : string = "/src/assets/images/upload-image.jpg";
  fileToUpload : File = null;
  
  constructor(
    private adminService : AdminService,
    private alertifyService : AlertifyService
  ) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList) {
    this.fileToUpload = file.item(0);

    //Showing Image preview ->
    var reader = new FileReader();
    reader.onload = (event : any) => {
      this.imgageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(imageName,imageFile) {
    this.adminService.addPhoto(imageName.value,this.fileToUpload).subscribe(data => {
      console.log('done')
      imageName.value = null;
      imageFile.value = null;
      this.imgageUrl = "/src/assets/images/upload-image.jpg";
      this.alertifyService.success("Fotoğraf Başarıyla Eklendi")
    })
  }
}
