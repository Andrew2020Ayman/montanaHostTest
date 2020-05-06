import { Component, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from "ngx-loading";
@Component({
  selector: 'app-single-comp',
  templateUrl: './single-comp.component.html',
  styleUrls: ['./single-comp.component.css']
})
export class SingleCompComponent implements OnInit {

  constructor() { }
  
 
  
  comments = [
    {
      img:"assets/comment/comment_1.png",
      des:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
      name:"Emilly Blunt",
      date:" December 6, 2020",
      time:"3:12 pm"
    },
    {
      img:"assets/comment/comment_2.png",
      des:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
      name:"Emilly Blunt",
      date:" june 4, 2020",
      time:"8:05 pm"
    },
    {
      img:"assets/comment/comment_3.png",
      des:"Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
      name:"Emilly Blunt",
      date:" April 19, 2020",
      time:"10:01 am"
    }
  ];
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
