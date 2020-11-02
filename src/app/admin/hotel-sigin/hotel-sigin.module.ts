import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelSiginPageRoutingModule } from './hotel-sigin-routing.module';

import { HotelSiginPage } from './hotel-sigin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelSiginPageRoutingModule
  ],
  declarations: [HotelSiginPage]
})
export class HotelSiginPageModule {}
