import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileloginPage } from './profilelogin.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileloginPageRoutingModule {}
