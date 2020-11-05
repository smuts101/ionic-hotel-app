import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGallaryPageRoutingModule } from './image-gallary-routing.module';

import { ImageGallaryPage } from './image-gallary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGallaryPageRoutingModule
  ],
  declarations: [ImageGallaryPage]
})
export class ImageGallaryPageModule {}
