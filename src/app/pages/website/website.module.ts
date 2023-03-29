import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ComponentsModule
    ],
  exports: [
    // LandingPageComponent
  ]
})
export class WebsiteModule { }
