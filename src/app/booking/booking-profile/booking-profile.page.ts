import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../../hotel.service';
import 'firebase/firestore';
import 'firebase/auth';


@Component({
  selector: 'app-booking-profile',
  templateUrl: './booking-profile.page.html',
  styleUrls: ['./booking-profile.page.scss'],
})
export class BookingProfilePage implements OnInit {

  profiles:any=[];
  
  hotelid = this.route.snapshot.params.hotelid;

  constructor(private route:ActivatedRoute,private router:Router,public hotelService:HotelService) { 
    
    console.log(this.hotelid)
  }

  ngOnInit() {
    var docRef =   firebase.firestore().collection('hotelsAccount').doc(this.hotelid);
    docRef.get().then(doc => {
        if (doc.exists) {
          this.profiles.push(doc.data());
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }
  async signOut(){
    this.hotelService.signOut();
  }
}
