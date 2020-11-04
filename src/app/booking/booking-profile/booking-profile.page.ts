import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../../hotel.service';
require('firebase/firestore');
require('firebase/auth'); 


@Component({
  selector: 'app-booking-profile',
  templateUrl: './booking-profile.page.html',
  styleUrls: ['./booking-profile.page.scss'],
})
export class BookingProfilePage implements OnInit {

  profiles:any=[];
  email = this.route.snapshot.params.email;
  constructor(private route:ActivatedRoute) { 
    console.log(this.email)
  }

  ngOnInit() { 
    firebase.firestore().collection('hotelsAccount').where("company_email",'==',this.email).onSnapshot(res => {
      res.forEach(element => {
        this.profiles.push(element.data());
        console.log(this.profiles)
      });
      console.log('Successful!!!');
    });
  }

}
