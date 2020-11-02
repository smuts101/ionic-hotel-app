import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelSiginPage } from './hotel-sigin.page';

const routes: Routes = [
  {
    path: '',
    component: HotelSiginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelSiginPageRoutingModule {}
