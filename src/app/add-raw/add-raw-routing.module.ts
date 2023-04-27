import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRawPage } from './add-raw.page';

const routes: Routes = [
  {
    path: '',
    component: AddRawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRawPageRoutingModule {}
