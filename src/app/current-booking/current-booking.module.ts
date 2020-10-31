import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentBookingPageRoutingModule } from './current-booking-routing.module';

import { CurrentBookingPage } from './current-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentBookingPageRoutingModule
  ],
  declarations: [CurrentBookingPage]
})
export class CurrentBookingPageModule {}
