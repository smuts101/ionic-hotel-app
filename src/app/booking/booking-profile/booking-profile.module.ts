import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingProfilePageRoutingModule } from './booking-profile-routing.module';

import { BookingProfilePage } from './booking-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingProfilePageRoutingModule
  ],
  declarations: [BookingProfilePage]
})
export class BookingProfilePageModule {}
