import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalaxyroutePage } from './galaxyroute.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxyroutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalaxyroutePageRoutingModule {}
