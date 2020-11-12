import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-current-booking',
  templateUrl: './current-booking.page.html',
  styleUrls: ['./current-booking.page.scss'],
})
export class CurrentBookingPage implements OnInit {
  list:any=[];
  profile:any=[];
 
  constructor(private router:Router,public hotelService:HotelService) { 
    firebase.firestore().collectionGroup("bookings")
    .where("user_uid", "==",   this.hotelService.getUserSessionUid()).orderBy("date","desc")
    .get()
    .then(snap => {
        snap.forEach(doc => {
          this.list.push(doc.data())  ;
        });
    });


    
    firebase.firestore().collection("userprofiles")
    .where("user_uid", "==",this.hotelService.getUserSessionUid())
    .get()
    .then(snap => {
        snap.forEach(doc => {
          this.profile.push(doc.data())  ;
          console.log(doc.data())
        });
    });





  }







  ngOnInit() { 

  }
}




































// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import * as firebase from 'firebase';
// import { HotelService } from '../hotel.service';

// @Component({
//   selector: 'app-current-booking',
//   templateUrl: './current-booking.page.html',
//   styleUrls: ['./current-booking.page.scss'],
// })
// export class CurrentBookingPage implements OnInit {
//   /*Make Hotel Profile (Form)*/
//    rating:any
//    location:any
//    price:any
//    name:any
//    types:any;
//   /*End here */
 
   
//    /*Uploading Images */  
//    imgUrl:any="";
//    storedStatus=false;
//  /*Ends Here */
  
//  collection:any
//  docs:any
//  arrayProfileImg:any=[]
//   showList=[]
//   allHotels:any=[]
//     dbz =firebase.firestore()
//    museumsz = this.dbz.collectionGroup('hotel');
//   constructor(private router:Router,public hotelService:HotelService) { 
//     this.collection = 'hotel';
//     this.docs ='SK'
     
//    // this.arrayProfileImg.push(this.kkkk());

//   //console.log(this.arrayProfileImg)
//   }

//   ngOnInit() { 
//    this.arrayProfileImg.push(this.kkkk()) 
//    console.log(this.arrayProfileImg)
//   }
//  /*Make Hotel Profile (Form)*/
//   makeHotelProfile(){
//     //this.hotelService.addCollectionsEdit(this.hotelService.getUserSessionUid(),this.name,this.surname,this.checkin,this.checkout);   
//     this.hotelService.addCollections( this.hotelService.getUserSessionUid() ,this.name,this.rating,this.location,this.types,this.price,this.hotelService.getUserSessionUid() ,this.imgUrl);
//   }
//   /*End here */
 
//   /*UPloading Images */
//   addImages(){
//     this.hotelService.addImages(this.hotelService.getUserSessionUid() ,this.hotelService.getUserSessionUid() , this.imgUrl)
//   }
//   fileChangeEvent(editFileInput: any){
//     const reader = new FileReader();
//         reader.onload = (e:any)=>{
//             const image = new Image();
//             image.src = e.target.result;
//             image.onload = rs=> {
//               const imgBase64Path = e.target.result;
//               this.imgUrl = imgBase64Path;
//               this.storedStatus = true;
//               return this.imgUrl;
//             }
//           }
//           reader.readAsDataURL(editFileInput.target.files[0])
//   }
// /*End Here */

// /*UserProfile view */
// printProfileUser(){
//   firebase.firestore().collection('Hotels').doc(this.hotelService.getUserSessionUid()).collection('hotel').onSnapshot(res => {
//     res.forEach(element => {
//       this.arrayProfileImg.push(element.data())
//       console.log("-------"+this.arrayProfileImg)
//     });
//     console.log('Successful!!!');
//   }); 
// }
// /*Ends Here */



// kkkk(){
//   this.hotelService.PrintHotelProfile(this.hotelService.getUserSessionUid())
// }


// }

