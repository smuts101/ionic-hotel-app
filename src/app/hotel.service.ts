import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  emailId:any="";
  hotelUser:any;
  tempVar:any;
  uid:any;
  hotelUserUid:any;
  Dates:any;
  Times:any;
  hotels:any=[];
  kkkk:any={}
  listGallary:any=[]
//Mashiars part
  array:any=[]
  


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
hotelProfiles(uid,company_tel,employee_id,company_name,rating,address,history,imgUrl){
  var db =firebase.firestore();
  var hotelsRef = db.collection("hotelsAccount");
  var hotel = Promise.all([
    hotelsRef.doc(uid).set({
      company_tel: company_tel,
        rating: rating,
        employee_id: employee_id,
        company_name: company_name,
        address:address,
        history:history,
        owner_uid:uid,
        imgUrl:imgUrl
    }).then(a=>{console.log("Saved")}).catch(function(error) {
      console.log("Error getting document:", error);
  })
]);
}
addHotelGallary(uid,owneruid,imgUrl){
  var db =firebase.firestore();
  var hotelsRef = db.collection("hotelsAccount");
  var hotel = Promise.all([
    hotelsRef.doc(uid).collection('images').doc().set({
      owneruid:owneruid,
      imgUrl:imgUrl
    })
]);
}



///////////////////////////////////////////////////////////
/////////////////////////Booking//////////////////////////
booking(checkin,checkout,kids,adult,rooms,hotel_id,user_email,user_uid
  ,bankName,cardno,month,year,vcc,time,date
){
  var citiesRef = firebase.firestore().collection('hotelsAccount')
  var hotel = Promise.all([
    citiesRef.doc(hotel_id).collection("bookings").add({
      checkin: checkin,
      checkout:checkout,
      kids:kids,
      adult:adult,
      rooms:rooms,
      hotel_id:hotel_id,
      user_uid:user_uid,
      user_email:user_email,
      bankName:bankName,
      cardno:cardno,
      month:month,
      year:year,
      vcc:vcc,
      time:time,
      date:date,
      "status":"panding"
      }).then((res) => {
      this.router.navigateByUrl('feedback');
      })
]);
}

bookingStatus(hotel_id,user_uid,value){
  var db =firebase.firestore(); 
  var hotelsRef = db.collection("hotelsAccount").doc(hotel_id);
  
  var hotel = Promise.all([
    hotelsRef.collection("bookings").doc(user_uid)
    .set({
      
       status:value,
       user_uid:user_uid
      
    },{merge: true }).then(a=>{
     console.log("Changed")
    })
]);
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
 getDates(){
  var d =new Date();
  this.Dates = (d.getMonth()+1).toString()+"/"+(d.getDay()+1).toString()+"/"+(d.getFullYear()+1).toString()
   return this.Dates;
}

  getTimes(){
  var today =new Date();
  this.Times = today.getHours()+":"+today.getMinutes();
  return (this.Times) 
  }
  

///////////////////////////////////////////////////////////////////
/////////////////////////////General users/////////////////////////
async history(conllectionName,hotel_id,subCollection,tableAtrribute,value){
  firebase.firestore().collection(conllectionName).doc(hotel_id).collection(subCollection)
   .where(tableAtrribute, "==", value)
   .get()
   .then((querySnapshot) => {
     //this.router.navigateByUrl('hotel-panel');
       querySnapshot.forEach(function(doc) {
     // doc.data() is never undefined for query doc snapshots
          return doc.data()
        });
   })
   .catch(function(error) {
       console.log("Error getting documents: ", error);
   });
}

async GetAll(conllectionName): Promise<any>{
  return firebase.firestore().collection(conllectionName).get().then(res=>{
         res.forEach(element=>{
         element.data()
     
    })
  })
}
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



CreateHotelProfile(uid,name,rating,location,types,price,owneruid,imgUrl){
     firebase.firestore().collection('Hotels')
     .add(Object.assign(
         {uid:uid},
         {name:name},
         {rating:rating},
         {location:location},
         {types:types},
         {price:price},
         {owneruid:owneruid},
         {price:price},
         {imgUrl:imgUrl}
         ))
     .then((res) => {
       console.log("Document successfully written!");
     })
     .catch((error) => {
       console.error("Error writing document: ", error);
     });
  }


addCollections(uid,name,rating,location,types,price,owneruid,imgUrl){
  var db =firebase.firestore();
  var hotelsRef = db.collection("Hotels");
  var hotel = Promise.all([
    hotelsRef.doc(uid).set({
        hotelname: name,
        location:location,
        rating: rating,
        types: types,
        price: price,
        owneruid:owneruid,
        imgUrl:imgUrl
    })
]);
}



addImages(uid,owneruid,imgUrl){
  var db =firebase.firestore();
  var hotelsRef = db.collection("Hotels");
  var hotel = Promise.all([
    hotelsRef.doc(uid).collection('images').doc().set({
      owneruid:owneruid,
      imgUrl:imgUrl
    })
]);
}




printCollection(){
  var db =firebase.firestore()
  var museums = db.collectionGroup('hotel');
  museums.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
       //   console.log(doc.id, ' => ', doc.data());
          return doc.data()
      });
  });
}








PrintHotelProfile(uid){
  firebase.firestore().collection('Hotels').doc(uid).get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}
PrintHotelGallary(uid){
  firebase.firestore().collection('Hotels').doc(uid).collection("images").get()
  .then(snap => {
      snap.forEach(doc => {
          console.log(doc.data());
      });
  });
}





















}
