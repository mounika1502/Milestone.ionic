import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryDataPageRoutingModule } from './inventory-data-routing.module';

import { InventoryDataPage } from './inventory-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryDataPageRoutingModule
  ],
  declarations: [InventoryDataPage]
})
export class InventoryDataPageModule {}
