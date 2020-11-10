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
    // this.hotelService.loadingGallary();
  this. loadingGallary(this.hotelService.getHotelUserUid()) ;   
    console.log(this.list)
}
loadingGallary(uid){
  firebase.firestore().collection("hotelsAccount").doc(uid).collection("images")
  .where("owneruid", "==", uid)
  .get()
  .then((querySnapshot) => {
    //this.router.navigateByUrl('hotel-panel');
      querySnapshot.forEach((doc)=> {
    // doc.data() is never undefined for query doc snapshots
   // this.list.push(doc.data())
         this.list.push(Object.assign(doc.data(),{img_uid:doc.id}));
         return this.list
       });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
}


removeItem(removeID){
  firebase.firestore().collection("hotelsAccount").doc(this.hotelService.getHotelUserUid()).collection("images").doc(removeID).delete()

}

async signOut(){
  this.hotelService.signOut();
}  

  ngOnInit() {
  }

}



























