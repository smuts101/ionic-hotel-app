import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-gallaries',
  templateUrl: './gallaries.page.html',
  styleUrls: ['./gallaries.page.scss'],
})
export class GallariesPage implements OnInit {
  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;
  feedback: string;
  state: number=0;

  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {
  }


  gallaryUpload(){
    this.feedback= this.hotelService.showFeedBack()
    this.state=1;
this.hotelService.addHotelGallary(this.hotelService.getHotelUserUid(),this.hotelService.getHotelUserUid(),this.cardImageBase64)
}





  fileChangeEvent(fileInput: any) {
    this. imageError = null;
    if(fileInput.target.files && fileInput.target.files[0]){
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;   
        if(fileInput.target.files[0].size > max_size){
          this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
          return false;
        }
        if (!allowed_types.includes( fileInput.target.files[0].type)) {
          this.imageError = 'Only Images are allowed ( JPG | PNG )';
          return false;
        }
        const reader = new FileReader();
        reader.onload = (e:any)=>{
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs=> {
              const img_height = rs.currentTarget['height'];
              const img_width = rs.currentTarget['width'];
              console.log(img_height,img_width);
              if(img_height > max_height && img_width > max_width){
                this.imageError =
                'Maximum dimentions allowed ' +
                max_height +
                '*' +
                max_width +
                'px';
                return false;
              }else{
                const imgBase64Path = e.target.result;
                this.cardImageBase64 = imgBase64Path;
                this.isImageSaved = true;
               return this.cardImageBase64;
              }
            }
          }
        reader.readAsDataURL(fileInput.target.files[0])
    }
  }
  async signOut(){
    this.hotelService.signOut();
  }  





}
