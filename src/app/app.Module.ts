import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the AppRoutingModule for routing

import { AppComponent } from './app.component';

import { WHOAREWE1Component } from './whoarewe1/whoarewe1.component';
import { WHOAREWE2Component } from './whoarewe2/whoarewe2.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

@NgModule({
  // Declarations: Components, Directives, and Pipes belong here
  declarations: [
    AppComponent,
    WHOAREWE1Component,
    WHOAREWE2Component,
    HomeComponent,
    NavbarComponent,
    FooterComponent
   
  ],

  imports: [
    BrowserModule,
    NgModule,
    AppRoutingModule,
    RouterModule,
    RouterLink 
  ],

  // Providers: Services that the application needs
  providers: [],

  // Bootstrap: The main component that Angular creates and inserts into the index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
