import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../../hotel.service';
require('firebase/firestore');
require('firebase/auth');
@Component({
  selector: 'app-hotel-signup',
  templateUrl: './hotel-signup.page.html',
  styleUrls: ['./hotel-signup.page.scss'],
})
export class HotelSignupPage implements OnInit {
  employee_no:any ="";
  company_email:any ="";
  company_phone:any ="";
  hotel_password:any ="";
  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {
  }
  hotelSignUp(){
    this.hotelService.hotelSignUp(this.employee_no,this.company_email,this.company_phone,this.hotel_password)
  }
  

}
