import { Component, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from "ngx-loading";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  config;
  loading = true;
  items=[
    "assets/banner/about_banner.png",
    "assets/banner/banner2.png"
  ];

  customOptions: any = {
    loop: true,
    dots: false,
    nav: true,
    slideBy: "1",
    mouseDrag: true,
    touchDrag: true,
    margin: 15,
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
    }
  };

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
  

    document.getElementById("SliderImgs").style.backgroundImage=this.items[0];
  }

}
