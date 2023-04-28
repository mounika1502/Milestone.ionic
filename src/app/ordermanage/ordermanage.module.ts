import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { OrdermanagePageRoutingModule } from './ordermanage-routing.module';

import { OrdermanagePage } from './ordermanage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdermanagePageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [OrdermanagePage]
})
export class OrdermanagePageModule {}
