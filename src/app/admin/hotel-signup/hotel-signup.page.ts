import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../../hotel.service';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-hotel-signup',
  templateUrl: './hotel-signup.page.html',
  styleUrls: ['./hotel-signup.page.scss'],
})
export class HotelSignupPage implements OnInit {
  formData:any 
  
  constructor(private router:Router,public hotelService:HotelService) { 
    this.formData = {
      email:'',
      password:''
    };
  }

  ngOnInit() {}


 
   async createUser(){
     this.hotelService.createUser(this.formData.email,this.formData.password);
  }


}
