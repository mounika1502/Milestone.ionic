import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerordersPageRoutingModule } from './dealerorders-routing.module';

import { DealerordersPage } from './dealerorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealerordersPageRoutingModule
  ],
  declarations: [DealerordersPage]
})
export class DealerordersPageModule {}
