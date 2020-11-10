import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../../hotel.service';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.page.html',
  styleUrls: ['./hotel-details.page.scss'],
})
export class HotelDetailsPage implements OnInit {

  company_tel:any
  employee_id:any
  company_name:any
  rating:any
  address:any
  history:any
  email:any
   status:boolean = false;
   array:any={}
  show:any


  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;




  constructor(private router:Router,public hotelService:HotelService) { 

  //   console.log("----------------->"+this.hotelService.getHotelUserUid() );

  //   console.log("----------------->"+this.hotelService.getHotelUserEmail() );

  //   var db=firebase.firestore();
  //   db.collection('hotelsAccount').where("company_email",'==',this.hotelService.getHotelUserEmail() ).get().then(res=>{
  //     console.log(res.size)
  //     this.show = res.size
  //     if(res.size >= 0){
  //       console.log("Create account")
  //       this.hotelProfile(this.company_tel,this.employee_id,this.company_name,this.rating,this.address,
  //                          this.history,this.hotelService.getHotelUserUid(),this.cardImageBase64)
  //     }else{
  //       console.log("already an active user")
  //     }
  //  }).catch(function(error) {
  //     console.log("Error getting documents: ", error);
  // });
  }

  ngOnInit() {
     console.log(this.hotelService.getUserSession())
  }



  //this.company_tel,this.employee_id,this.company_name,this.rating,this.address,
  //                           this.history,this.hotelService.getHotelUserUid(),
  //                           this.cardImageBase64
  hotelAccounts(){
   this.hotelService.hotelProfiles(this.hotelService.getHotelUserUid(),this.company_tel,this.employee_id,this.company_name,this.rating,this.address,this.history,this.cardImageBase64)

}

// hotelProfiles(uid,company_tel,employee_id,company_name,rating,address,history,imgUrl){
//   var db =firebase.firestore();
//   var hotelsRef = db.collection("hotelsAccount");
//   var hotel = Promise.all([
//     hotelsRef.doc(uid).set({
//       company_tel: company_tel,
//         rating: rating,
//         employee_id: employee_id,
//         company_name: company_name,
//         address:address,
//         history:history,
//         owner_uid:uid,
//         imgUrl:imgUrl
//     }).then(a=>{console.log("Saved")}).catch(function(error) {
//       console.log("Error getting document:", error);
//   })
// ]);
// }






//   hotelAccounts(){
//     var db=firebase.firestore();
//     db.collection('hotelsAccount').where("company_email",'==',this.hotelService.getUserSession() ).get().then(res=>{
//       console.log(res.size)
//       this.show = res.size
//       if(res.size >= 0){
//         console.log("Create account")
//         this.hotelProfile(this.company_tel,this.employee_id,this.company_name,this.rating,this.address,
//                           this.history,this.hotelService.getHotelUserUid(),
//                           this.cardImageBase64)
//       }else{
//         console.log("already an active user")
//       }
//       res.forEach(doc=>{
//         //console.log("already exist"+doc.data().company_tel)
//         this.status = true;
//       })
// //console.log("not exist")
// //this.hotelProfile(this.company_tel,this.employee_id,this.company_name,this.rating,this.address,this.history,this.hotelService.getUserSession())
//     }).catch(function(error) {
//       console.log("Error getting documents: ", error);
//   });
//   }


//   hotelProfile(company_tel,employee_id,company_name,rating,address,history,owner_uid,image){
//     firebase.firestore().collection('hotelsAccount').doc(this.hotelService.getHotelUserUid())
//     .set(Object.assign({company_tel:company_tel},{employee_id:employee_id},{company_name:company_name},
//      {rating:rating},{address:address},{history:history},{owner_uid:owner_uid},{profile_url:image}))
//     .then((res) => {
//       console.log("Document successfully written!");
//     })
//     .catch((error) => {
//       console.error("Error writing document: ", error);
//     });
//  }




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
