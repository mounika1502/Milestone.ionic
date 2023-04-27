import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShipperPageRoutingModule } from './add-shipper-routing.module';

import { AddShipperPage } from './add-shipper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddShipperPageRoutingModule
  ],
  declarations: [AddShipperPage]
})
export class AddShipperPageModule {}
