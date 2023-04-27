import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippersPage } from './shippers.page';

const routes: Routes = [
  {
    path: '',
    component: ShippersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippersPageRoutingModule {}
