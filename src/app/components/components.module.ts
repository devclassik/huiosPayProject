import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconFontComponent } from './font/font.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { CommunitySectionComponent } from './community-section/community-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlaySectionComponent } from './overlay-section-why-huiospay/overlay-section.component';


@NgModule({
  declarations: [
    ButtonComponent,
    IconFontComponent,
    NavbarComponent,
    FooterComponent,
    BackToTopComponent,
    CommunitySectionComponent,
    OverlaySectionComponent
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
    BackToTopComponent,
    
  ]
})
export class ComponentsModule { }
