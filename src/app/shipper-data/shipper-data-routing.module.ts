import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipperDataPage } from './shipper-data.page';

const routes: Routes = [
  {
    path: '',
    component: ShipperDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipperDataPageRoutingModule {}
