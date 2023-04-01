import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconFontComponent } from './font/font.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { CommunitySectionComponent } from './community-section/community-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlaySectionComponent } from './why-huiospay-overlay-section/overlay-section.component';
import { DevelopersOverlaySectionComponent } from './developers-overlay-section/developers-overlay-section.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconFontComponent,
    NavbarComponent,
    FooterComponent,
    BackToTopComponent,
    CommunitySectionComponent,
    OverlaySectionComponent,
    DevelopersOverlaySectionComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ButtonComponent,
    IconFontComponent,
    NavbarComponent,
    FooterComponent,
    CommunitySectionComponent,
    OverlaySectionComponent,
    DevelopersOverlaySectionComponent,
    BackToTopComponent,
    
  ]
})
export class ComponentsModule { }
