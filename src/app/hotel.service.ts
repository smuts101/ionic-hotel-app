import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
require('firebase/firestore');
require('firebase/auth');

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private router:Router) { }


  async loginRegister(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password).then(results=>{
      console.log(results);
      this.router.navigateByUrl('welcome');
    }).catch((error)=>{
      console.log(error.message);
    })
  }

  async createUser(email,password){
  
    firebase.auth().createUserWithEmailAndPassword(email,password).then(results=>{
      console.log(results);
     // this.router.navigateByUrl('welcome');
    }).catch((error)=>{
      console.log(error.message);
    })
  }

  async signOut(){
    firebase.auth().signOut().then(results=>{
      console.log(results);
      this.router.navigateByUrl('home');
    }).catch((error)=>{
      console.log(error.message);
    });
  }

}
