import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipperDataPageRoutingModule } from './shipper-data-routing.module';

import { ShipperDataPage } from './shipper-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipperDataPageRoutingModule
  ],
  declarations: [ShipperDataPage]
})
export class ShipperDataPageModule {}
