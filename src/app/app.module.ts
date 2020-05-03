import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './view/home/home.component';

import { OwlModule } from "ngx-owl-carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {MatMenuModule} from '@angular/material/menu';
import { AboutComponent } from './view/about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { RoomsComponent } from './view/rooms/rooms.component';
import { ContactComponent } from './view/contact/contact.component';
import {AgmCoreModule} from '@agm/core';
import { BlogComponent } from './view/blog/blog.component';
import { SingleCompComponent } from './view/single-comp/single-comp.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    RoomsComponent,
    ContactComponent,
    BlogComponent,
    SingleCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      /* apiKey:'AIzaSyD8CSL2P9dPVAq0efa3yskFoIUUdsxg7PQ' */
       apiKey:'AIzaSyC9er13I_YgiTPvCSy2QeBdDsUTRHQsYEo'
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
