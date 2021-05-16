import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundersPageRoutingModule } from './founders-routing.module';

import { FoundersPage } from './founders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundersPageRoutingModule
  ],
  declarations: [FoundersPage]
})
export class FoundersPageModule {}
