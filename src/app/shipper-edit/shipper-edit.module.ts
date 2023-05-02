import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShipperEditPageRoutingModule } from './shipper-edit-routing.module';

import { ShipperEditPage } from './shipper-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipperEditPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ShipperEditPage]
})
export class ShipperEditPageModule {}
