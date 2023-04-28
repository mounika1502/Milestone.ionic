import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdermanagePage } from './ordermanage.page';

const routes: Routes = [
  {
    path: '',
    component: OrdermanagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdermanagePageRoutingModule {}
