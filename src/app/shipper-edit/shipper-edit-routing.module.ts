import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipperEditPage } from './shipper-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ShipperEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipperEditPageRoutingModule {}
