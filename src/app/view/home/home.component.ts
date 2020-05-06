import { Component, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from "ngx-loading";
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  playBool = false;
  YouTubeVid=false;

  
  constructor() { 
   
  }

 
  photos=[
     "assets/banner/banner2.png",
     "assets/banner/banner.png"
]; 
  customOptions: any = {
    loop: true,
    dots: false,
    nav: false,
    slideBy: "1",
    mouseDrag: true,
    touchDrag: true,
    
    autoWidth:true,
    lazyLoad: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      }
    }
  };
  arr_img = [
    " assets/banner/banner2.png",
      "assets/banner/banner.png"
 
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

  playClick(){
    this.playBool = !this.playBool;
    this.YouTubeVid = true;
    document.querySelector("body").style.overflow="hidden";
  }
  ReturnToBook(){
    this.playBool = !this.playBool;
    this.YouTubeVid = false;
    document.querySelector("body").style.overflow="scroll";
  }


}
