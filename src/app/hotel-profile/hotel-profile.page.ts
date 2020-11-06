import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';
require('firebase/firestore');
require('firebase/auth'); 

@Component({
  selector: 'app-hotel-profile',
  templateUrl: './hotel-profile.page.html',
  styleUrls: ['./hotel-profile.page.scss'],
})
export class HotelProfilePage implements OnInit {
  profiles:any=[];
  email = this.route.snapshot.params.hotelid;
  constructor(private route:ActivatedRoute) { 
    console.log(this.email)
  }

  ngOnInit() { 
    firebase.firestore().collection('hotelsAccount').where("owner_uid",'==',this.email).onSnapshot(res => {
      res.forEach(element => {
        this.profiles.push(element.data());
        console.log(this.profiles)
      });
      console.log('Successful!!!');
    });
  }

}
