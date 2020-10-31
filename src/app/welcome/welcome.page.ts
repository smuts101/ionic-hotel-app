import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
require('firebase/firestore');
require('firebase/auth');
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async signOut(){
    firebase.auth().signOut();
  }

}
