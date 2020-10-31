import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelProfilePage } from './hotel-profile.page';

const routes: Routes = [
  {
    path: '',
    component: HotelProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelProfilePageRoutingModule {}
