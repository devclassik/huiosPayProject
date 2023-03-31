import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { WhyHuiospayComponent } from './why-huiospay/why-huiospay.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    WhyHuiospayComponent
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
