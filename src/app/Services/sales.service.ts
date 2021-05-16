import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private httpClient:HttpClient) { }

  GetSaleData():Observable<any>{
    return this.httpClient.get('http://api.steampowered.com/ISteamApps/GetAppList/v0001/'); 
  }
  
}
