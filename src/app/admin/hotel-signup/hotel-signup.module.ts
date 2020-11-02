import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelSignupPageRoutingModule } from './hotel-signup-routing.module';

import { HotelSignupPage } from './hotel-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelSignupPageRoutingModule
  ],
  declarations: [HotelSignupPage]
})
export class HotelSignupPageModule {}
