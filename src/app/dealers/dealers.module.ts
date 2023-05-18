import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { DealersPageRoutingModule } from './dealers-routing.module';

import { DealersPage } from './dealers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealersPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [DealersPage]
})
export class DealersPageModule {}
