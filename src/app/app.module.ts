import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FirstCapDirective } from './first-cap.directive';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';




@NgModule({
  declarations: [AppComponent, FirstCapDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,},UniqueDeviceID],
  bootstrap: [AppComponent],
})
export class AppModule {}
