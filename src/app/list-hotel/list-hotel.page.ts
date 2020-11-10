import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { HotelService } from '../hotel.service';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.page.html',
  styleUrls: ['./list-hotel.page.scss'],
})
export class ListHotelPage implements OnInit {

  profiles:any=[]
  constructor() { }

  ngOnInit() { 
    firebase.firestore().collection('hotelsAccount').onSnapshot(res => {
      res.forEach(element => {
        this.profiles.push(element.data());
        console.log(this.profiles)
      });
      console.log('Successful!!!');
    });
  }

}
