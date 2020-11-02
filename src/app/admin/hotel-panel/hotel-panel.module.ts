import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPanelPageRoutingModule } from './hotel-panel-routing.module';

import { HotelPanelPage } from './hotel-panel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPanelPageRoutingModule
  ],
  declarations: [HotelPanelPage]
})
export class HotelPanelPageModule {}
