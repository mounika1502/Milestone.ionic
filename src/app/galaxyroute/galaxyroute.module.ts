import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalaxyroutePageRoutingModule } from './galaxyroute-routing.module';

import { GalaxyroutePage } from './galaxyroute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalaxyroutePageRoutingModule
  ],
  declarations: [GalaxyroutePage]
})
export class GalaxyroutePageModule {}
