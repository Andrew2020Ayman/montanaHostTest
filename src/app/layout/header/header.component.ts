import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  BookHeader=false;

  constructor() {
    
    

   }

  ngOnInit() {
    $(window).scroll(function(){
     // $('.nav_cont').toggleClass('scrolled', $(this).scrollTop() > 50);
     
      if($(this).scrollTop() >250){
        document.getElementById("myDiv").style.position="fixed"
        document.getElementById("myDiv").style.backgroundColor = "black";
        document.getElementById("rowD").style.marginTop="-9%";
        document.getElementById("myDiv").style.height="20%";
      }else{
        document.getElementById("myDiv").style.position="absolute"
        document.getElementById("myDiv").style.backgroundColor = "transparent";
        document.getElementById("myDiv").style.height="0";
        document.getElementById("rowD").style.marginTop="0";
      }
      
    });

    $( function() {
      $( "#datepicker" ).datepicker({
        dateFormat: "dd-mm-yy"
        ,	duration: "fast"
      });
    } );

  
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
