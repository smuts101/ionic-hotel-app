import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingProfilePage } from './booking-profile.page';

const routes: Routes = [
  {
    path: '',
    component: BookingProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingProfilePageRoutingModule {}
