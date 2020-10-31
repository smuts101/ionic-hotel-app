import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallariesPage } from './gallaries.page';

const routes: Routes = [
  {
    path: '',
    component: GallariesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallariesPageRoutingModule {}
