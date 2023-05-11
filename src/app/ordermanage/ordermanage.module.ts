import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdermanagePageRoutingModule } from './ordermanage-routing.module';

import { OrdermanagePage } from './ordermanage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdermanagePageRoutingModule,Ng2SearchPipeModule,ReactiveFormsModule
  ],
  declarations: [OrdermanagePage]
})
export class OrdermanagePageModule {}
