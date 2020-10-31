import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentBookingPage } from './current-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentBookingPageRoutingModule {}
