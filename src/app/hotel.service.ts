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
  tempVar:any;
  uid:any;
  hotelUserUid:any;
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
        this.hotelUserSession(email,uid)  
      //  console.log("-->"+email +this.getUserSession())
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
        this.userSession(email,uid)  
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
         
         });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
///////////////////////////////////////////////////////////
/////////////////////////Booking//////////////////////////

booking(checkin,checkout,kids,adult,rooms,hotel_id,user_email
        ,bankName,cardno,month,year,vcc
  ){

  var citiesRef = firebase.firestore().collection('hotelsAccount')
  citiesRef.doc(hotel_id).collection("bookings").add({
      checkin: checkin,
      checkout:checkout,
      kids:kids,
      adult:adult,
      rooms:rooms,
      hotel_id:hotel_id,
      user_email:user_email,
      bankName:bankName,
      cardno:cardno,
      month:month,
      year:year,
      vcc:vcc
    }).then((res) => {
      
      this.router.navigateByUrl('feedback');

    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });




/*
     firebase.firestore().collection('booking')
     .add(Object.assign({checkin:checkin},{checkout:checkout},{kids:kids},{adult:adult},{rooms:rooms},{email:email}))
     .then((res) => {
       console.log("Document successfully written!");
       this.temporalStorage(email)
       this.router.navigateByUrl('payment');
     })
     .catch((error) => {
       console.error("Error writing document: ", error);
     });
*/

}

temporalStorage(email){
      this.tempVar = email;
}
returnTemp(){
  return this.tempVar;
}


checkIfBooked(email){

  var citiesRef = firebase.firestore().collection("hotelsAccount")

  citiesRef.where('user_email', '==', email).onSnapshot(res => {
    res.forEach(element => {
      console.log(element.data())
      
       return Object.assign(element.data(),{uid:element.id});
    });
});
}


payment(bankName,cardno,month,year,vcc,email){







  var citiesRef = firebase.firestore().collection('hotelsAccount').doc().collection('bookings')

  citiesRef.where('company_email', '==', 'hotel@hot.com').onSnapshot(res => {
    res.forEach(element => {

    });
});








/*
  firebase.firestore().collection('payment')
  .add(Object.assign({bankName:bankName},{cardno:cardno},{cardno:cardno},{month:month},{year:year},{vcc:vcc},{email:email}))
  .then((res) => {
    console.log("Document successfully written!");
    this.router.navigateByUrl('feedback');
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });*/
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
userSession(userid,uid){
   this.emailId = userid;
   this.uid = uid;
}
getUserSession(){
  return this.emailId ;
}
getUserSessionUid(){
  return this.uid ;
}

hotelUserSession(email,uid){

   this.hotelUser = email;
   this.hotelUserUid = uid;
}
getHotelUserEmail(){
 return this.hotelUser;
}
getHotelUserUid(){
  return this.hotelUserUid;
 }





}























