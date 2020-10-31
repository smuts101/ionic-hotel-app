import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHotelPageRoutingModule } from './list-hotel-routing.module';

import { ListHotelPage } from './list-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHotelPageRoutingModule
  ],
  declarations: [ListHotelPage]
})
export class ListHotelPageModule {}
