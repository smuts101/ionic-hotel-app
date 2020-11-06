import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from 'src/app/hotel.service';
@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.page.html',
  styleUrls: ['./image-gallary.page.scss'],
})
export class ImageGallaryPage implements OnInit {
  list:any=[]
   

  constructor(private route:ActivatedRoute,public hotelService:HotelService) { 
    console.log(  this.hotelService.getHotelUserUid())
    firebase.firestore().collection("hotelsAccount").doc(this.hotelService.getHotelUserUid()).collection("gallaries")
    .where("hotel_uid", "==", this.hotelService.getHotelUserUid())
    .get()
    .then((querySnapshot) => {
      //this.router.navigateByUrl('hotel-panel');
        querySnapshot.forEach((doc)=> {
      // doc.data() is never undefined for query doc snapshots
           this.list.push(Object.assign(doc.data(),{img_uid:doc.id}));
           console.log(this.list)
         });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

removeItem(removeID){
  firebase.firestore().collection("hotelsAccount").doc(this.hotelService.getHotelUserUid()).collection("gallaries").doc(removeID).delete()

}

async signOut(){
  this.hotelService.signOut();
}  

  ngOnInit() {
  }

}



























