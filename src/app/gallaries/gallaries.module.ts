import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallariesPageRoutingModule } from './gallaries-routing.module';

import { GallariesPage } from './gallaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallariesPageRoutingModule
  ],
  declarations: [GallariesPage]
})
export class GallariesPageModule {}
