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
  array_image=[
    "assets/banner/about_banner.png",
    "assets/banner/about_banner.png",
    "assets/banner/banner2.png"
  ];

 /*  customOptions: any = {
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
 */
  
 
customOptions: any = {
  loop: true,
  dots: false,
  navSpeed: 700,

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

 ngOnInit() {

  this.customOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,

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

}
