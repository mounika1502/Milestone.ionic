import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawProductPage } from './raw-product.page';

const routes: Routes = [
  {
    path: '',
    component: RawProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RawProductPageRoutingModule {}
