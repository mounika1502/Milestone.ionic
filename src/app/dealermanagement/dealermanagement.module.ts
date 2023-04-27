import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { DealermanagementPageRoutingModule } from './dealermanagement-routing.module';

import { DealermanagementPage } from './dealermanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealermanagementPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [DealermanagementPage]
})
export class DealermanagementPageModule {}
