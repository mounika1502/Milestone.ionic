import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { RawProductPageRoutingModule } from './raw-product-routing.module';

import { RawProductPage } from './raw-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    RawProductPageRoutingModule
  ],
  declarations: [RawProductPage]
})
export class RawProductPageModule {}
