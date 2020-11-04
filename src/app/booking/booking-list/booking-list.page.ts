import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../../hotel.service';
require('firebase/firestore');
require('firebase/auth');

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})
export class BookingListPage implements OnInit {
  profiles:any=[]
  constructor() { }

  ngOnInit() { 
    firebase.firestore().collection('hotelsAccount').onSnapshot(res => {
      res.forEach(element => {
        this.profiles.push(element.data());
        console.log(this.profiles)
      });
      console.log('Successful!!!');
    });
  }

}
