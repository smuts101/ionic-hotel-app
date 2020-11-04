import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage
  },
  {
    path: 'booking-list',
    loadChildren: () => import('./booking-list/booking-list.module').then( m => m.BookingListPageModule)
  },
  {
    path: 'booking-profile',
    loadChildren: () => import('./booking-profile/booking-profile.module').then( m => m.BookingProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
