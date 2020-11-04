import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../hotel.service';
require('firebase/firestore');
require('firebase/auth');
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router:Router,public hotelService:HotelService) { 
   console.log(this.hotelService.getUserSession()) ;
  }

  ngOnInit() {
  }
  async signOut(){
    firebase.auth().signOut();
  }

}
