import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryDataPage } from './inventory-data.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryDataPageRoutingModule {}
