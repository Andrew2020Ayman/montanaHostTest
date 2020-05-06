import { Component, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from "ngx-loading";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  Blogs = [
    {
      img:"assets/blog/single_blog_2.png",
      day:"15",
      month:"Jan",
      title:"Google inks pact for new 35-storey office",
      des:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
    },
    {
      img:"assets/blog/single_blog_1.png",
      day:"20",
      month:"Jun",
      title:"Google inks pact for new 35-storey office",
      des:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
    },
    {
      img:"assets/blog/single_blog_3.png",
      day:"10",
      month:"Apr",
      title:"Google inks pact for new 35-storey office",
      des:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
    },
    {
      img:"assets/blog/single_blog_4.png",
      day:"07",
      month:"Mar",
      title:"Google inks pact for new 35-storey office",
      des:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
    },
    {
      img:"assets/blog/single_blog_5.png",
      day:"12",
      month:"Dec",
      title:"Google inks pact for new 35-storey office",
      des:"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
    }
  ]

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
