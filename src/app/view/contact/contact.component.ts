import { Component, OnInit } from '@angular/core';
  import { ngxLoadingAnimationTypes } from "ngx-loading";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }

  lat:number = 25.0216;
  long:number = 29.5479;
  
  config;
  loading = true;

  ngOnInit() {
    this.config = {
      backdropBorderRadius: "3px",
      backdropBackgroundColour: "#rgb(255, 255, 255,0.5)",
      animationType: ngxLoadingAnimationTypes.circleSwish,
      primaryColour:"#009dff",
      fullScreenBackdrop: true
    };

    setTimeout(() => {
      this.loading = false;
    }, 1700);
  

  }

}
