import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { ShippersPageRoutingModule } from './shippers-routing.module';

import { ShippersPage } from './shippers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ShippersPageRoutingModule
  ],
  declarations: [ShippersPage]
})
export class ShippersPageModule {}
