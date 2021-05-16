import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {
myGenre:string;
  constructor(private storage:Storage, private navCTRL: NavController) { }

  ngOnInit() {
    this.storage.get("myGenre")
    .then((data)=>{
      this.myGenre=data;
    })
    .catch()
  }
  saveGenre()
  {
    console.log(this.myGenre);
    this.storage.set("genre", this.myGenre)
    .then(()=>{
      this.navCTRL.navigateBack('/home');
    })
    .catch()
  }
}
