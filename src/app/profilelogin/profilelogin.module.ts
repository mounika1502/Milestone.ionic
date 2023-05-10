import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileloginPageRoutingModule } from './profilelogin-routing.module';

import { ProfileloginPage } from './profilelogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileloginPageRoutingModule
  ],
  declarations: [ProfileloginPage]
})
export class ProfileloginPageModule {}
