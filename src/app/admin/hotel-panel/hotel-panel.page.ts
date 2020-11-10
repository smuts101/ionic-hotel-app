import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../../hotel.service';
import 'firebase/firestore';
import 'firebase/auth';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-hotel-panel',
  templateUrl: './hotel-panel.page.html',
  styleUrls: ['./hotel-panel.page.scss'],
})
export class HotelPanelPage implements OnInit {
 
  constructor(private router:Router,public hotelService:HotelService) {  }

  ngOnInit() {
     console.log(this.hotelService.getUserSession())
  }

  async signOut(){
    this.hotelService.signOut();
  }











}
