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
