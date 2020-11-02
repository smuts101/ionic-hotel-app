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

//////////////////////////////////////////////////////////
/////////////////Signup Functions////////////////////////
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

//////////////////Hotel Section////////////////////////
hotelSignUp(employee_no,company_email,company_phone,hotel_password){
    
  console.log(employee_no+" "+company_email+" "+company_phone+" "+hotel_password)

     firebase.firestore().collection('hetel-account')
     .add(Object.assign({employee_no:employee_no},{company_email:company_email},{company_phone:company_phone},{hotel_password:hotel_password}))
     .then((res) => {
       console.log("Document successfully written!");
     })
     .catch((error) => {
       console.error("Error writing document: ", error);
     });
  }

  async hotelSignIn(employee_no,company_email,hotel_password){
    firebase.firestore().collection("hetel-account")
    .where("hotel_password", "==", hotel_password)
    .where("company_email", "==", company_email)
    .where("employee_no", "==", employee_no)
    .get()
    .then((querySnapshot) => {
      //this.router.navigateByUrl('hotel-panel');
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
           return doc.data();
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
     
    });

}
}
