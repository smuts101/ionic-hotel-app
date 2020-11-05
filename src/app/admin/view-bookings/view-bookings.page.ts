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
  constructor(private route:ActivatedRoute,public hotelService:HotelService) { 
   // this.hotelService.signOut()
 
  console.log(  this.hotelService.getHotelUserUid())

    firebase.firestore().collection("hotelsAccount").doc(this.hotelService.getHotelUserUid()).collection("bookings")
    .where("hotel_id", "==", this.hotelService.getHotelUserUid())
    .get()
    .then((querySnapshot) => {
      //this.router.navigateByUrl('hotel-panel');
        querySnapshot.forEach((doc)=> {
      // doc.data() is never undefined for query doc snapshots
           this.list.push(doc.data());
         
         });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });





  }

  ngOnInit() {
  }

}
