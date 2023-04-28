import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawDataPage } from './raw-data.page';

const routes: Routes = [
  {
    path: '',
    component: RawDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RawDataPageRoutingModule {}
