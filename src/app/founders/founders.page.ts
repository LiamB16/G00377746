import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.page.html',
  styleUrls: ['./founders.page.scss'],
})
export class FoundersPage implements OnInit {
  founders: any[] =
  [{name: "Gabe Newell:", detail:"co-founder of valve and creator of steam"},
  {name: "Mike Harrriton:", detail:"founder of valve and creator of steam"}];

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
