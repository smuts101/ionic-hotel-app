import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelProfilePageRoutingModule } from './hotel-profile-routing.module';

import { HotelProfilePage } from './hotel-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelProfilePageRoutingModule
  ],
  declarations: [HotelProfilePage]
})
export class HotelProfilePageModule {}
