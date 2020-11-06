import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelImgsPageRoutingModule } from './hotel-imgs-routing.module';

import { HotelImgsPage } from './hotel-imgs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelImgsPageRoutingModule
  ],
  declarations: [HotelImgsPage]
})
export class HotelImgsPageModule {}
