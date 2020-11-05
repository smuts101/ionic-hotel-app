import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../hotel.service';
require('firebase/firestore');
require('firebase/auth');

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email:any = "";
  password:any = "";
  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {
  }
  async loginRegister(){
    this.hotelService.loginRegisterUser(this.email,this.password); 
  }
}
