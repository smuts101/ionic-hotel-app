import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyCJ5qheOr4qvlKrK7svwbNzWU7YQeK2tSE",
  authDomain: "testcase-6da42.firebaseapp.com",
  databaseURL: "https://testcase-6da42.firebaseio.com",
  projectId: "testcase-6da42",
  storageBucket: "testcase-6da42.appspot.com",
  messagingSenderId: "797569092752",
  appId: "1:797569092752:web:b794b1cb8368c3a1ca1c15"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
