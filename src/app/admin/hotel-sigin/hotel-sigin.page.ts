import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../../hotel.service';
require('firebase/firestore');
require('firebase/auth');
@Component({
  selector: 'app-hotel-sigin',
  templateUrl: './hotel-sigin.page.html',
  styleUrls: ['./hotel-sigin.page.scss'],
})
export class HotelSiginPage implements OnInit {
  employee_no:any ="";
  company_email:any ="";
  hotel_password:any ="";
  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {

  }
  hotelSignIn(){
    console.log(this.hotel_password)
    
    if(!this.hotelService.hotelSignIn(this.employee_no,this.company_email,this.hotel_password)){
              console.log(false)
    }else{
      console.log(true)
    }
  }

}
