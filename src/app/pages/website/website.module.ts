import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ComponentsModule } from 'src/app/components/components.module';





@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    // MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ComponentsModule,
    

  ],
  exports:[
    // LandingPageComponent
  ]
})
export class WebsiteModule { }
