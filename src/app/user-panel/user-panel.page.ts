import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.page.html',
  styleUrls: ['./user-panel.page.scss'],
})
export class UserPanelPage implements OnInit {
  profile:any={}
  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {
    console.log(this.hotelService.getUserSession())
    console.log("----------------->"+this.hotelService.getUserSessionUid());

    var db=firebase.firestore(); 
    db.collection('userprofiles').where("user_uid",'==',this.hotelService.getUserSessionUid() ).get().then((querySnapshot) => {
     //this.router.navigateByUrl('hotel-panel');
       querySnapshot.forEach((doc) =>{
     // doc.data() is never undefined for query doc snapshots
       this.profile=(doc.data()) ;
        
        });
   })
   .catch(function(error) {
       console.log("Error getting documents: ", error);
   });





 }
  async signOut(){
    this.hotelService.signOut();
  }

}
