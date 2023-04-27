import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShipperPage } from './add-shipper.page';

const routes: Routes = [
  {
    path: '',
    component: AddShipperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShipperPageRoutingModule {}
