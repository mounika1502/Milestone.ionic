import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackgalaxyPage } from './blackgalaxy.page';

const routes: Routes = [
  {
    path: '',
    component: BlackgalaxyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackgalaxyPageRoutingModule {}
