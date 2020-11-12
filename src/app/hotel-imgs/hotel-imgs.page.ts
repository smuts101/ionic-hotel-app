import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-imgs',
  templateUrl: './hotel-imgs.page.html',
  styleUrls: ['./hotel-imgs.page.scss'],
})
export class HotelImgsPage implements OnInit {

  list:any=[];
  hotelid = this.route.snapshot.params.hotelid;
   

  constructor(private route:ActivatedRoute,public hotelService:HotelService) { 
   console.log(this.hotelid)
  
    firebase.firestore().collection("hotelsAccount").doc(this.hotelid).collection("images")
    
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
