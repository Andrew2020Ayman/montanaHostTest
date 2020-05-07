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

 
  array_image=[
    {
      imgPath: "assets/banner/banner2.png",
      title: "Life is Beautiful", 
      des: "Unlock to enjoy the view of Martine" ,
    },
    {
      imgPath: "assets/banner/banner.png",
      title: "Montana Resort" , 
      des: "Unlock to enjoy the view of Martine" ,
    }
     
     
]; 

  customOptions: any = {
    loop: true,
    dots: false,
    navSpeed: 700,
  margin:10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true, // Show next and prev buttons
    navText: [
      "<img src='assets/Group 783.png'>",
      "<img src='assets/Group 782.png'>"
    ]
  };

  
  config;
  loading = true;
  ngOnInit() {

    this.customOptions = {
      loop: true,
      dots: false,
      navSpeed: 700,
      margin:10,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: true, // Show next and prev buttons
      navText: [
        "<img src='assets/Group 783.png'>",
        "<img src='assets/Group 782.png'>"
      ]
    };
    
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
