import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SteamPage } from './steam.page';

const routes: Routes = [
  {
    path: '',
    component: SteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SteamPageRoutingModule {}
