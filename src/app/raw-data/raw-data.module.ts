import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RawDataPageRoutingModule } from './raw-data-routing.module';

import { RawDataPage } from './raw-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RawDataPageRoutingModule
  ],
  declarations: [RawDataPage]
})
export class RawDataPageModule {}
