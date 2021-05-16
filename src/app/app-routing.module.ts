import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'steam',
    loadChildren: () => import('./steam/steam.module').then( m => m.SteamPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'founders',
    loadChildren: () => import('./founders/founders.module').then( m => m.FoundersPageModule)
  },
  {
    path: 'geolocator',
    loadChildren: () => import('./geolocator/geolocator.module').then( m => m.GeolocatorPageModule)
  },
  {
    path: 'genre',
    loadChildren: () => import('./genre/genre.module').then( m => m.GenrePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
