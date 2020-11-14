import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.page.html',
  styleUrls: ['./view-bookings.page.scss'],
})
export class ViewBookingsPage implements OnInit {
list:any=[]
feedback:any;
state:any=0;
  constructor(private route:ActivatedRoute,public hotelService:HotelService) { 

   // this.hotelService.signOut()
 
  console.log(  this.hotelService.getHotelUserUid())
    firebase.firestore().collection("hotelsAccount").doc(this.hotelService.getHotelUserUid()).collection("bookings")
    .where("hotel_id", "==", this.hotelService.getHotelUserUid())
    .get()
    .then((querySnapshot) => { 
        querySnapshot.forEach((doc)=> {
           this.list.push(Object.assign( doc.data(),{uid:doc.id}) );
         });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
 }



 // bookingStatus(uid,value)

 status(hotel_id,bookingid,status){
  this.feedback= this.hotelService.showFeedBack()
  this.state=1;
  this.hotelService.bookingStatus(hotel_id,bookingid,status)
  
 }


  ngOnInit() {
  }
  async signOut(){
    this.hotelService.signOut();
  }
}
