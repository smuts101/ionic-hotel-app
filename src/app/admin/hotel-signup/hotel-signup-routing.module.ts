import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelSignupPage } from './hotel-signup.page';

const routes: Routes = [
  {
    path: '',
    component: HotelSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelSignupPageRoutingModule {}
