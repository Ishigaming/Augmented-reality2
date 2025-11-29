import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  arReady: boolean = false; 

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.arReady = true;
      console.log("AR Scene Loaded");
    }, 1000); 
  }
}