import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {
  conllectionName:any;
  hotel_id:any;
  subCollection:any;
  tableAtrribute:any;
  value:any;
  hotels:any=[] 
  constructor(private route:ActivatedRoute,public hotelService:HotelService) {
    this.conllectionName = "hotelsAccount";
    this.hotel_id = "5qJEYpTbFKX61hw5GX3nSxGunxw2";
    this.subCollection= "bookings"
    this.tableAtrribute = "user_uid"
         
    console.log(this.hotelService.getUserSessionUid())
      firebase.firestore().collection(this.conllectionName).get().then(res=>{
       res.forEach(element=>{
      console.log(element.data().owner_uid) 
      this.getHotels(element.data().owner_uid) 



  })
 })

    //console.log( this.hotelService.GetAll(this.conllectionName)) 


   }

   getHotels(hotel_id){
      firebase.firestore().collection(this.conllectionName).doc(hotel_id).collection(this.subCollection)
      .where(this.tableAtrribute, "==", this.hotelService.getUserSessionUid()).where('hotel_id', "==", hotel_id)
      .get()
      .then((querySnapshot) => {
        //this.router.navigateByUrl('hotel-panel');
          querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data())
             return doc.data()
           });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
      
   }


 getHistory(){
    
  this.hotelService.history(this.conllectionName,this.hotel_id,this.subCollection,this.tableAtrribute,this.hotelService.getUserSessionUid())

 }




  ngOnInit() {
  }

}
