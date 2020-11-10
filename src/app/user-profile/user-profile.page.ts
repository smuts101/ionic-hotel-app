import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {


  name:any
  surname:any
  phone:any

   status:boolean = false;
   array:any={}
   show:any


  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;




  constructor(private router:Router,public hotelService:HotelService) { 

    console.log("----------------->"+this.hotelService.getUserSessionUid());

    var db=firebase.firestore();
    db.collection('userprofiles').where("user_uid",'==',this.hotelService.getUserSessionUid() ).get().then(res=>{
      console.log(res.size)
      this.show = res.size
      if(res.size >= 0){
        console.log("Create account")
        this.hotelProfile(this.name,this.surname,this.phone,this.hotelService.getUserSessionUid())
      }else{
        console.log("already an active user")
      }
   }).catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  }

  ngOnInit() {
    //  console.log(this.hotelService.getUserSession())
    //  console.log("----------------->"+this.hotelService.getUserSessionUid());

    //  var db=firebase.firestore();
    //  db.collection('userprofiles').where("user_uid",'==',this.hotelService.getUserSessionUid() ).get().then((querySnapshot) => {
    //   //this.router.navigateByUrl('hotel-panel');
    //     querySnapshot.forEach(function(doc) {
    //   // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
         
    //      });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });





  }

  hotelAccounts(){
    var db=firebase.firestore();
    db.collection('hotelsAccount').where("company_email",'==',this.hotelService.getUserSessionUid() ).get().then(res=>{
      console.log(res.size)
      this.show = res.size
      if(res.size >= 0){
        console.log("Create account")
        this.hotelProfile(this.name,this.surname,this.phone,this.hotelService.getUserSessionUid())
      }else{
        console.log("already an active user")
      }
      res.forEach(doc=>{
        //console.log("already exist"+doc.data().company_tel)
        this.status = true;
      })
//console.log("not exist")
//this.hotelProfile(this.company_tel,this.employee_id,this.company_name,this.rating,this.address,this.history,this.hotelService.getUserSession())
    }).catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  }


  hotelProfile(name,surname,phone,user_uid){
    firebase.firestore().collection('userprofiles').doc(this.hotelService.getUserSessionUid())
    .set(Object.assign({name:name},{surname:surname},{phone:phone},
     {user_uid:user_uid},{profile_url:this.cardImageBase64}))
    .then((res) => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
 }

  CreateProfile(){}

printAll(){}
 

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
