import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPanelPage } from './hotel-panel.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPanelPageRoutingModule {}
