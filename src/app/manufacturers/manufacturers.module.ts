import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { ManufacturersPageRoutingModule } from './manufacturers-routing.module';

import { ManufacturersPage } from './manufacturers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManufacturersPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [ManufacturersPage]
})
export class ManufacturersPageModule {}
