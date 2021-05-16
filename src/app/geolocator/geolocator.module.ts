import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocatorPageRoutingModule } from './geolocator-routing.module';

import { GeolocatorPage } from './geolocator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocatorPageRoutingModule
  ],
  declarations: [GeolocatorPage]
})
export class GeolocatorPageModule {}
