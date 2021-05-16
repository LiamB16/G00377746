import { SalesService } from '../Services/sales.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './steam.page.html',
  styleUrls: ['./steam.page.scss'],
})
export class SteamPage implements OnInit{
  ProductData:any = [];
  constructor(private SalesService: SalesService) {}
  
ngOnInit(){
  this.SalesService.GetSaleData().subscribe(
        (data)=>{
        this.ProductData = data.app;
        console.log(this.ProductData);
        }
  );
}
}