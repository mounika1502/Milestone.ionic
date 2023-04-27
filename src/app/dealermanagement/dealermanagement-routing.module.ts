import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealermanagementPage } from './dealermanagement.page';

const routes: Routes = [
  {
    path: '',
    component: DealermanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealermanagementPageRoutingModule {}
