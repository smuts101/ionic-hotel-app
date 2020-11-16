import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../hotel.service';
import 'firebase/firestore';
import 'firebase/auth';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  formData:any
  // email:any = "";
  // password:any = "";
  constructor(private router:Router,public hotelService:HotelService) { 
    this.formData = {
      email:'',
      password:''
    };
  }

  ngOnInit() {
  }
  async loginRegister(){
    
    this.hotelService.loginRegisterUser(this.formData.email,this.formData.password); 
  }
}
