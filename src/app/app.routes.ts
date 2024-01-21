import { RouterModule, Routes } from '@angular/router';
import { WHOAREWE1Component } from './whoarewe1/whoarewe1.component';
import { WHOAREWE2Component } from './whoarewe2/whoarewe2.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';


 export const routes: Routes = [
        { path: '', component: MainComponent },
        { path: 'WHOAREWE1', component: WHOAREWE1Component },
        { path: 'WHOAREWE2', component: WHOAREWE2Component },
      ];
   
      @NgModule({
        imports: [
          CommonModule,
          RouterModule.forRoot(routes, {
            useHash: true,
          }),
        ],
        exports: [RouterModule], // Export RouterModule for use in other modules
      })

      
    
      export class AppRoutingModule {}
