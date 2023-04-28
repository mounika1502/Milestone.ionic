import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RawProductPageRoutingModule } from './raw-product-routing.module';

import { RawProductPage } from './raw-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RawProductPageRoutingModule
  ],
  declarations: [RawProductPage]
})
export class RawProductPageModule {}
