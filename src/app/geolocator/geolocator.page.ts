import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-geolocator',
  templateUrl: './geolocator.page.html',
  styleUrls: ['./geolocator.page.scss'],
})
export class GeolocatorPage {
lat:any;
long: any;
  constructor(private geolocation:Geolocation) { }

  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
