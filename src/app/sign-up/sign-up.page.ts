import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { HotelService } from '../hotel.service';
require('firebase/firestore');
require('firebase/auth');
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email:any = "";
  password:any = "";
  phone:any="";
  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {}

  hotelSignUp(){
    
   console.log(this.email+" "+this.password+" "+this.phone)

      firebase.firestore().collection('login')
      .add(Object.assign({email:this.email},{phone:this.phone},{password:this.password}))
      .then((res) => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
   }
   async loginRegister(){
     this.hotelService.loginRegister(this.email,this.password);
   }
   async createUser(){
     this.hotelService.createUser(this.email,this.password);
  }
  async signOut(){
    this.hotelService.signOut();
  }



}
