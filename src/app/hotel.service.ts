import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
require('firebase/firestore');
require('firebase/auth');

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  emailId:any="";
  hotelUser:any;
  constructor(private router:Router) { }





//////////////////////////////////////////////////////////
/////////////////Signup Functions////////////////////////
  async loginRegister(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password).then(results=>{
      console.log(results);

      var user = firebase.auth().currentUser;
      var  email,uid;
      if (user != null) {
     
        email = user.email;
        uid = user.uid;
        this.userSession(email)  
        console.log("-->"+email +this.getUserSession())
      }


      this.router.navigateByUrl('hotel-panel');
    }).catch((error)=>{
      console.log(error.message);
    })
  }

  async loginRegisterUser(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password).then(results=>{
      console.log(results);
      var user = firebase.auth().currentUser;
      var  email,uid;
      if (user != null) {
        email = user.email;
        uid = user.uid;
        this.userSession(email)  
        console.log("-->"+email +this.getUserSession())
      }
      this.router.navigateByUrl('booking-list');
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
        //   console.log(doc.id, " => ", doc.data());
           return doc.data()
        });
     
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
///////////////////////////////////////////////////////////
/////////////////////////Booking//////////////////////////

booking(checkin,checkout,kids,adult,rooms,email){
    

     firebase.firestore().collection('booking')
     .add(Object.assign({checkin:checkin},{checkout:checkout},{kids:kids},{adult:adult},{rooms:rooms},{email:email}))
     .then((res) => {
       console.log("Document successfully written!");
     })
     .catch((error) => {
       console.error("Error writing document: ", error);
     });
  }


/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
printAll(){
  firebase.firestore().collection('hetel-account').where('company_email', '==', 'hotel@hot.com').onSnapshot(res => {
    res.forEach(element => {

    });
});
}

  
/////////////////////////////////////////////////////////////
/////////////////////Dealing with Sessions//////////////////
///////////////////////////////////////////////////////////
userSession(userid){
   this.emailId = userid;
}
getUserSession(){
  return this.emailId ;
}

hotelUserSession(value){
  let key = 'hotel-user';
   this.hotelUser = localStorage.setItem(key,value)
}
getHotelUser(){
 return this.hotelUser;
}






}























