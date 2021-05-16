import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocatorPage } from './geolocator.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocatorPageRoutingModule {}
