import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRawPageRoutingModule } from './add-raw-routing.module';

import { AddRawPage } from './add-raw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRawPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddRawPage]
})
export class AddRawPageModule {}
