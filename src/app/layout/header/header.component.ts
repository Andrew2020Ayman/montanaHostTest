import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  BookHeader=false;
  
  Childrens= [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
  ];

  Rooms = [
    {value: 'R1', viewValue: 'Laxaries Rooms'},
    {value: 'R2', viewValue: 'Deluxe Room'},
    {value: 'R3', viewValue: 'Signature Room'},
    {value: 'R4', viewValue: 'Couple Room'},
  ];


navBarOpen = false;

  Currrouter = '1';
  public urL: string = "";


  constructor(private router: Router) {
    this.urL = window.location.href;
    console.log( this.urL);
    let url = this.urL.split('http://localhost:4200/');
    this.urL = url[1];
    console.log(this.urL);
    
    if(this.urL === "Home" ){this.Currrouter='1';}
    if(this.urL === "Rooms" ){this.Currrouter='2';}
    if(this.urL === "about" ){this.Currrouter='3';}
    if(this.urL === "Blog" ){this.Currrouter='4';}
    if(this.urL === "Contact" ){this.Currrouter='5';}

    console.log(this.Currrouter);
    
   }

  ngOnInit() {
    

    
    $(".menu-collapsed").click(function () {
      $(this).toggleClass("menu-expanded");
    });

    this.urL = window.location.href;
    console.log( this.urL);
    let url = this.urL.split('http://localhost:4200/');
    this.urL = url[1];
    console.log(this.urL);
    
    if(this.urL === "Home" ){this.Currrouter='1';}
    if(this.urL === "Rooms" ){this.Currrouter='2';}
    if(this.urL === "about" ){this.Currrouter='3';}
    if(this.urL === "Blog" ){this.Currrouter='4';}
    if(this.urL === "Contact" ){this.Currrouter='5';}

console.log(this.Currrouter);


        document.getElementById("myDiv").style.position="absolute"
        document.getElementById("myDiv").style.backgroundColor = "transparent";
        document.getElementById("myDiv").style.height="0";
        document.getElementById("rowD").style.marginTop="-10%";

    $(window).scroll(function(){
     // $('.nav_cont').toggleClass('scrolled', $(this).scrollTop() > 50);
     
      if($(this).scrollTop() >250){
        document.getElementById("myDiv").style.position="fixed"
        document.getElementById("myDiv").style.backgroundColor = "black";
        document.getElementById("rowD").style.marginTop="-19%";
        document.getElementById("myDiv").style.height="20%";
      }else{
        document.getElementById("myDiv").style.position="absolute"
        document.getElementById("myDiv").style.backgroundColor = "transparent";
        document.getElementById("myDiv").style.height="0";
        document.getElementById("rowD").style.marginTop="-10%";
      }
      
    });

   

  
  }


  ngAfterViewInit() {
    $("#sidemenu_toggle").on("click", function () {
      $(".side-menu").addClass("side-menu-active"),
        $("#close_side_menu").fadeIn(700);
    }),
      $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200);
      }),
      $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"),
          $("#close_side_menu").fadeOut(200);
      });
  }

  Active_Router_Click(RouterNumber){
    this.Currrouter = RouterNumber;
  }
  BookNowPOP(){
    this.BookHeader = true;
    document.querySelector("body").style.overflow="hidden";
  }

  ReturnToHome(){
    this.BookHeader = false;
    document.querySelector("body").style.overflow="scroll";
  }

 

}
