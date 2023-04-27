import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackgalaxyPageRoutingModule } from './blackgalaxy-routing.module';

import { BlackgalaxyPage } from './blackgalaxy.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackgalaxyPageRoutingModule,
    Ng2SearchPipeModule
    
  ],
  declarations: [BlackgalaxyPage]
})
export class BlackgalaxyPageModule {}
