import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawEditPage } from './raw-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RawEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RawEditPageRoutingModule {}
