import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RawEditPageRoutingModule } from './raw-edit-routing.module';

import { RawEditPage } from './raw-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RawEditPageRoutingModule
  ],
  declarations: [RawEditPage]
})
export class RawEditPageModule {}
