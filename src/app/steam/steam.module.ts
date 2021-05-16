import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SteamPageRoutingModule } from './steam-routing.module';

import { SteamPage } from './steam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SteamPageRoutingModule
  ],
  declarations: [SteamPage]
})
export class SteamPageModule {}
